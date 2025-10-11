(() => {
    const subjects = [
      { name: "MATHEMATICS", static: "images/subjects/math_static.png", hover: "images/subjects/math_hover.png" },
      { name: "CHEMISTRY", static: "images/subjects/chem_static.png", hover: "images/subjects/chem_hover.png" },
      { name: "ENGLISH", static: "images/subjects/eng_static.png", hover: "images/subjects/eng_hover.png" },
      { name: "SPORTS", static: "images/subjects/sports_static.png", hover: "images/subjects/sports_hover.png" },
      { name: "AI", static: "images/subjects/ai_static.png", hover: "images/subjects/ai_hover.png" },
    ];
  
    const progress = JSON.parse(localStorage.getItem("st_quiz_progress") || "{}");
    const user = localStorage.getItem("st_logged_in") || "__anon__";
    const section = document.querySelector(".quiz-select");
  
    function getStatusColor(status) {
      switch (status) {
        case "completed": return "#00ff88";
        case "in_progress": return "#ffcc00";
        default: return "#ffffff";
      }
    }
  
    function getStatusText(subject, quizId) {
      const userData = progress[user]?.[subject]?.[quizId];
      if (!userData) return { text: "Not started", color: getStatusColor() };
      if (userData.completed) return { text: "Completed", color: getStatusColor("completed") };
      return { text: "In Progress", color: getStatusColor("in_progress") };
    }
  
    section.innerHTML = "";
    subjects.forEach(sub => {
      const card = document.createElement("div");
      card.className = "quiz-card";
      card.innerHTML = `
        <img src="${sub.static}" class="static" alt="${sub.name}">
        <img src="${sub.hover}" class="hovered" alt="${sub.name} Hover">
      `;
      card.addEventListener("click", () => openQuizSelector(sub.name));
      section.appendChild(card);
    });
  
    function openQuizSelector(subject) {
      const quiz1 = getStatusText(subject, "quiz1");
      const quiz2 = getStatusText(subject, "quiz2");
  
      const modal = document.createElement("div");
      modal.style = `
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.85);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        z-index: 100;
      `;
      modal.innerHTML = `
        <h2 style="color: cyan; margin-bottom: 20px;">${subject}</h2>
        <div style="display: flex; gap: 40px;">
          <div style="text-align: center;">
            <a href="quiz-${subject.toLowerCase()}.html?quiz=quiz1" class="nav-btn" style="background: cyan; color: black; padding: 10px 25px; border-radius: 8px; text-decoration: none;">Quiz 1</a>
            <p style="margin-top: 10px; color: ${quiz1.color}; font-weight: bold;">${quiz1.text}</p>
          </div>
          <div style="text-align: center;">
            <a href="quiz-${subject.toLowerCase()}.html?quiz=quiz2" class="nav-btn" style="background: cyan; color: black; padding: 10px 25px; border-radius: 8px; text-decoration: none;">Quiz 2</a>
            <p style="margin-top: 10px; color: ${quiz2.color}; font-weight: bold;">${quiz2.text}</p>
          </div>
        </div>
        <button id="closeModal" style="margin-top: 40px; background: transparent; border: 1px solid cyan; color: cyan; padding: 8px 20px; border-radius: 8px;">Close</button>
      `;
      document.body.appendChild(modal);
  
      document.getElementById("closeModal").addEventListener("click", () => modal.remove());
    }
  })();
  