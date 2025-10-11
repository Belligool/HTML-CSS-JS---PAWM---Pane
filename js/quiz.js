(() => {
  const API_BASE = "https://studee-tb-backend.vercel.app";
  const userEmail = localStorage.getItem("st_logged_in");
  if (!userEmail) {
    window.location.href = "login.html?redirect=quiz.html";
    return;
  }

  const STORAGE_KEY = "st_quiz_progress";
  const quizModal = document.getElementById("quizModal");
  const quizInner = document.getElementById("quizInner");
  const pickerModal = document.getElementById("quizPickerModal");
  const pickerInner = document.getElementById("pickerInner");

  const read = () => JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  const write = (data) => localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

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

  const getProgress = (subject, quizId) => getUser()[subject]?.[quizId] || null;

  const postProgress = async (payload) => {
    try {
      await fetch(`${API_BASE}/api/progress`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.warn("Progress sync failed:", err.message);
    }
  };

  const showModal = (el) => (el.style.display = "flex");
  const hideModal = (el) => (el.style.display = "none");

  quizModal.addEventListener("click", (e) => e.target === quizModal && hideModal(quizModal));
  pickerModal.addEventListener("click", (e) => e.target === pickerModal && hideModal(pickerModal));

  // 🔹 Show quiz picker (choose between quiz1 or quiz2)
  function showQuizPicker(subject) {
    pickerInner.innerHTML = `
      <h2 style="color: cyan;">${subject} Quiz</h2>
      <p class="small-muted">Choose your quiz packet:</p>
      <button class="quiz-btn" id="pick1">Quiz 1</button>
      <button class="quiz-btn" id="pick2">Quiz 2</button>
    `;
    showModal(pickerModal);

    document.getElementById("pick1").onclick = () => {
      hideModal(pickerModal);
      startQuiz(subject, "quiz1");
    };
    document.getElementById("pick2").onclick = () => {
      hideModal(pickerModal);
      startQuiz(subject, "quiz2");
    };
  }

  function startQuiz(subject, quizId) {
    const questions = QUESTIONS[subject]?.[quizId];
    if (!questions) return alert("No questions found for this quiz.");

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
        quizInner.innerHTML = `
          <h2 style="color:cyan;">Quiz Complete!</h2>
          <p>You scored ${score} / ${questions.length}</p>
          <button id="closeBtn" class="quiz-action-btn">Close</button>
        `;
        document.getElementById("closeBtn").onclick = () => hideModal(quizModal);
        return;
      }

      const q = questions[currentIndex];
      quizInner.innerHTML = `
        <div class="quiz-question">Q${currentIndex + 1}. ${q.q}</div>
        ${q.options.map((opt, i) => `<button class="option-btn" data-idx="${i}">${opt}</button>`).join("")}
        <div class="quiz-footer">
          <button id="prevBtn" class="quiz-action-btn" ${currentIndex === 0 ? "disabled" : ""}>Prev</button>
          <div class="small-muted">${currentIndex + 1} / ${questions.length}</div>
        </div>
      `;

      document.querySelectorAll(".option-btn").forEach((btn) => {
        btn.onclick = async () => {
          const idx = Number(btn.dataset.idx);
          answers[currentIndex] = idx;
        
          quizInner.querySelectorAll(".option-btn").forEach(b => b.classList.remove("selected"));
          btn.classList.add("selected");
        
          saveProgress(subject, quizId, { currentIndex, answers, completed: false });
        
          if (currentIndex === 0)
            await postProgress({ email: userEmail, subject, quizId, currentIndex });
        
          setTimeout(() => {
            currentIndex++;
            render();
          }, 300);
        };
      });

      document.getElementById("prevBtn").onclick = () => {
        if (currentIndex > 0) currentIndex--;
        render();
      };
    }

    showModal(quizModal);
  }

  document.querySelectorAll(".subject").forEach((card) => {
    card.addEventListener("click", () => {
      const subject = card.dataset.subject;
      showQuizPicker(subject);
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
