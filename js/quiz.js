(() => {
    const API_BASE = "https://studee-tb-backend.vercel.app"; 
    const userEmail = localStorage.getItem('st_logged_in') || '__anon__';
    const STORAGE_KEY = 'st_quiz_progress';

    function readProgress() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : {};
        } catch (e) {
            console.error('progress parse error', e);
            return {};
        }
    }
    function writeProgress(obj) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
    }

    function ensureUserProgress(obj, email = userEmail) {
        if (!obj[email]) obj[email] = {};
        return obj[email];
    }

    function getQuizProgress(subject, quizId) {
        const all = readProgress();
        const user = all[userEmail] || {};
        const subj = user[subject] || {};
        return subj[quizId] || null;
    }

    function saveQuizProgress(subject, quizId, data) {
        const all = readProgress();
        ensureUserProgress(all, userEmail);
        if (!all[userEmail][subject]) all[userEmail][subject] = {};
        all[userEmail][subject][quizId] = data;
        writeProgress(all);
    }

    async function postProgressToServer(payload) {
        try {

        const res = await fetch(`${API_BASE}/api/progress`, {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(payload)
        });
        if (!res.ok) throw new Error('Server rejected progress');
        return await res.json();
      } catch (err) {
        console.warn('Progress sync failed (queued locally):', err.message);
        return null;
      }
    }

    const subjectsGrid = document.getElementById('subjectsGrid');
    function renderSubjects() {
        subjectsGrid.innerHTML = '';
        Object.keys(QUESTIONS).forEach(subject => {
            const subjectEl = document.createElement('div');
            subjectEl.className = 'subject-card';
            subjectEl.innerHTML = `
              <div class="card-inner">
                <div class="subject-title">${subject}</div>
                <div class="subject-subline">${subject.toLowerCase()}</div>
                <div class="quiz-actions">
                  <button data-subject="${subject}" data-quiz="quiz1" class="quiz-action-btn">Quiz 1 <span class="badge" id="${subject}-quiz1-badge"></span></button>
                  <button data-subject="${subject}" data-quiz="quiz2" class="quiz-action-btn">Quiz 2 <span class="badge" id="${subject}-quiz2-badge"></span></button>
                </div>
              </div>
              <img class="subject-img" src="${getSubjectImage(subject)}" alt="${subject}">
            `;
            subjectsGrid.appendChild(subjectEl);
      });

      document.querySelectorAll('.quiz-action-btn').forEach(btn => {
        btn.addEventListener('click', ev => {
            const subject = btn.getAttribute('data-subject');
            const quizId = btn.getAttribute('data-quiz');
            openQuizLauncher(subject, quizId);
        });
      });

        updateAllBadges();
    }

    function getSubjectImage(subject) {
        const m = {
            MATHEMATICS: 'images/Killjoy.png',
            CHEMISTRY: 'images/Viper.png',
            ENGLISH: 'images/LunaSnow.png',
            SPORTS: 'images/Magik.png',
            AI: 'images/Ultron.png'
        };
        return m[subject] || 'images/FaramundoFC.png';
    }

    function updateAllBadges() {
        Object.keys(QUESTIONS).forEach(subject => {
          ['quiz1','quiz2'].forEach(quizId => {
            const badgeEl = document.getElementById(`${subject}-${quizId}-badge`);
            const prog = getQuizProgress(subject, quizId);
            if (!badgeEl) return;
            if (!prog) {
                badgeEl.textContent = 'Not started';
                badgeEl.className = 'badge status-not';
            } else if (prog.completed) {
                badgeEl.textContent = 'Completed';
                badgeEl.className = 'badge status-completed';
            } else {
                badgeEl.textContent = 'In progress';
                badgeEl.className = 'badge status-progress';
            }
          });
        });
    }

    function openQuizLauncher(subject, quizId) {
        const existing = getQuizProgress(subject, quizId);
        if (existing && !existing.completed) {
            const resume = confirm('You have an in-progress quiz. Press OK to resume, Cancel to restart.');
        if (resume) {
            startQuiz(subject, quizId, existing);
            return;
        } else {
            saveQuizProgress(subject, quizId, { currentIndex: 0, answers: [], completed: false, lastUpdated: Date.now(), score: null });
          }
        }
      
        startQuiz(subject, quizId, { currentIndex: 0, answers: [], completed: false, lastUpdated: Date.now(), score: null });
    }

    const quizModal = document.getElementById('quizModal');
    const quizInner = document.getElementById('quizInner');

    function showModal() { quizModal.style.display = 'flex'; }
    function hideModal() { quizModal.style.display = 'none'; }

    function startQuiz(subject, quizId, progress) {
        const qs = (QUESTIONS[subject] && QUESTIONS[subject][quizId]) || [];
        let currentIndex = progress.currentIndex || 0;
        let answers = progress.answers || new Array(qs.length).fill(null);

        renderQuestion();

        function saveLocal() {
            const payload = {
                currentIndex, answers, completed: false, score: null, lastUpdated: Date.now()
            };
          saveQuizProgress(subject, quizId, payload);
          updateAllBadges();
      }

      async function syncFirstAnswerIfNeeded(whenAnsweredIndex) {
        if (whenAnsweredIndex !== 0) return;
        const payload = {
            email: userEmail,
            subject,
            quizId,
            currentIndex: whenAnsweredIndex,
            answers,
            completed: false,
            lastUpdated: Date.now()
        };
        await postProgressToServer(payload);
      }

      function renderQuestion() {
        if (currentIndex >= qs.length) {
            const score = computeScore();
            const resultHtml = `
              <div class="result-screen">
                <h2 style="color:cyan">Quiz Complete</h2>
                <p class="small-muted">You scored ${score} / ${qs.length}</p>
                <div style="margin-top:14px;">
                  <button id="btn-close" class="btn-primary">Close</button>
                  <button id="btn-retry" class="quiz-action-btn" style="margin-left:8px;">Retry Quiz</button>
                </div>
              </div>
            `;
            quizInner.innerHTML = resultHtml;
            saveQuizProgress(subject, quizId, { currentIndex: qs.length, answers, completed: true, score, lastUpdated: Date.now() });
            updateAllBadges();
            postProgressToServer({ email: userEmail, subject, quizId, completed: true, score, lastUpdated: Date.now() });
            document.getElementById('btn-close').addEventListener('click', () => {
                hideModal();
            });
            document.getElementById('btn-retry').addEventListener('click', () => {
                saveQuizProgress(subject, quizId, { currentIndex: 0, answers: [], completed: false, score: null, lastUpdated: Date.now() });
                renderQuestionAt(0);
            });
            return;
        }

        const item = qs[currentIndex];
        const opts = item.options.map((opt, i) => `<button class="option-btn" data-idx="${i}">${opt}</button>`).join('');
        quizInner.innerHTML = `
          <div>
            <div class="quiz-question">Q${currentIndex+1}. ${item.q}</div>
            <div class="options">${opts}</div>
            <div class="quiz-footer">
              <div class="small-muted">Progress: ${currentIndex+1} / ${qs.length}</div>
              <div>
                <button id="btn-prev" class="quiz-action-btn" ${currentIndex===0?'disabled':''}>Prev</button>
                <button id="btn-skip" class="quiz-action-btn">Skip</button>
              </div>
            </div>
          </div>
        `;

        quizInner.querySelectorAll('.option-btn').forEach(b => {
            b.addEventListener('click', async (ev) => {
                const idx = Number(b.getAttribute('data-idx'));
                answers[currentIndex] = idx;
                saveLocal();

                await syncFirstAnswerIfNeeded(currentIndex);

                currentIndex++;
                renderQuestion();
          });
        });

        const btnPrev = document.getElementById('btn-prev');
        if (btnPrev) {
            btnPrev.addEventListener('click', () => {
                if (currentIndex > 0) {
                    currentIndex--;
                renderQuestion();
            }
          });
        }
        const btnSkip = document.getElementById('btn-skip');
        btnSkip.addEventListener('click', () => {
            answers[currentIndex] = null;
            saveLocal();
            currentIndex++;
            renderQuestion();
        });

        saveLocal();
      }

      function renderQuestionAt(index) {
            currentIndex = index;
            renderQuestion();
      }

      function computeScore() {
            let score = 0;
            for (let i = 0; i < qs.length; i++) {
                if (answers[i] != null && answers[i] === qs[i].answerIndex) score++;
        }
        return score;
      }

      showModal();
    }

    document.getElementById('quizModal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('quizModal')) hideModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') hideModal();
    });

    renderSubjects();

    window.__quiz_debug = { readProgress, writeProgress, renderSubjects, startQuiz };
})();