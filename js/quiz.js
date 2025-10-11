(() => {
  const API_BASE = "https://studee-tb-backend.vercel.app";
  const userEmail = localStorage.getItem("st_logged_in");
  if (!userEmail) {
    window.location.href = "login.html?redirect=quiz.html";
    return;
  }

  const STORAGE_KEY = "st_quiz_progress";
  const modal = document.getElementById("quizModal");
  const inner = document.getElementById("quizInner");

  const read = () => JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  const write = (d) => localStorage.setItem(STORAGE_KEY, JSON.stringify(d));

  const getUser = () => {
    const all = read();
    if (!all[userEmail]) all[userEmail] = {};
    return all[userEmail];
  };

  const saveProgress = (subject, quizId, data) => {
    const all = read();
    if (!all[userEmail]) all[userEmail] = {};
    if (!all[userEmail][subject]) all[userEmail][subject] = {};
    all[userEmail][subject][quizId] = data;
    write(all);
  };

  const getProgress = (subject, quizId) => {
    const user = getUser();
    return user[subject]?.[quizId] || null;
  };

  const postProgress = async (payload) => {
    try {
      await fetch(`${API_BASE}/api/progress`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (e) {
      console.warn("Progress sync failed:", e.message);
    }
  };

  const show = () => (modal.style.display = "flex");
  const hide = () => (modal.style.display = "none");

  modal.addEventListener("click", (e) => {
    if (e.target === modal) hide();
  });

  function startQuiz(subject, quizId = "quiz1") {
    const questions = QUESTIONS[subject]?.[quizId];
    if (!questions) return alert("No quiz found for this subject!");

    let progress = getProgress(subject, quizId) || {
      currentIndex: 0,
      answers: [],
      completed: false,
    };

    let currentIndex = progress.currentIndex;
    let answers = progress.answers;

    render();

    function render() {
      if (currentIndex >= questions.length) {
        const score = answers.filter((a, i) => a === questions[i].answerIndex).length;
        saveProgress(subject, quizId, { currentIndex, answers, completed: true, score });
        postProgress({ email: userEmail, subject, quizId, completed: true, score });
        inner.innerHTML = `
          <h2 style="color:cyan">Quiz Complete</h2>
          <p>You scored ${score} / ${questions.length}</p>
          <button id="closeBtn" class="quiz-action-btn">Close</button>
        `;
        document.getElementById("closeBtn").onclick = hide;
        return;
      }

      const q = questions[currentIndex];
      inner.innerHTML = `
        <div class="quiz-question">Q${currentIndex + 1}. ${q.q}</div>
        ${q.options.map(
          (opt, i) =>
            `<button class="option-btn" data-idx="${i}">${opt}</button>`
        ).join("")}
        <div class="quiz-footer">
          <button id="prevBtn" class="quiz-action-btn" ${
            currentIndex === 0 ? "disabled" : ""
          }>Prev</button>
          <div class="small-muted">${currentIndex + 1} / ${
        questions.length
      }</div>
        </div>
      `;

      document.querySelectorAll(".option-btn").forEach((btn) => {
        btn.onclick = async () => {
          const idx = Number(btn.dataset.idx);
          answers[currentIndex] = idx;
          saveProgress(subject, quizId, { currentIndex, answers, completed: false });
          if (currentIndex === 0)
            await postProgress({ email: userEmail, subject, quizId, currentIndex });
          currentIndex++;
          render();
        };
      });

      const prev = document.getElementById("prevBtn");
      if (prev) {
        prev.onclick = () => {
          if (currentIndex > 0) currentIndex--;
          render();
        };
      }
    }

    show();
  }

  document.querySelectorAll(".subject").forEach((card) => {
    card.addEventListener("click", () => {
      const subject = card.dataset.subject;
      startQuiz(subject);
    });
  });

  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn)
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("st_logged_in");
      alert("You have been logged out.");
      window.location.href = "index.html";
    });
})();
