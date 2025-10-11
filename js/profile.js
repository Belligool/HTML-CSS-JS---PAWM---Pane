(() => {
    const API_BASE = "https://studee-tb-backend.vercel.app";
    const profileBtn = document.getElementById("profileBtn");
    const profileModal = document.getElementById("profileModal");
    const profileInner = document.getElementById("profileInner");
    const profileClose = document.getElementById("profileClose");
    const profileCloseBtn = document.getElementById("profileCloseBtn");
    const profileNameEl = document.getElementById("profileName");
    const coursesListEl = document.getElementById("coursesList");
    const quizSummaryEl = document.getElementById("quizSummary");

    if (!profileBtn) return; 

    const userEmail = localStorage.getItem("st_logged_in");
    if (!userEmail) {
      profileBtn.addEventListener("click", () => {
        alert("Please login first.");
        window.location.href = "login.html";
      });
      return;
    }

    profileBtn.addEventListener("click", () => {
        loadProfile(); 
        profileModal.style.display = "flex";
    });
    profileClose && (profileClose.onclick = () => profileModal.style.display = "none");
    profileCloseBtn && (profileCloseBtn.onclick = () => profileModal.style.display = "none");
    profileModal.addEventListener("click", (e) => { if (e.target === profileModal) profileModal.style.display = "none"; });

    async function fetchProfile() {
        try {
            const res = await fetch(`${API_BASE}/api/profile?email=${encodeURIComponent(userEmail)}`);
            if (!res.ok) throw new Error("Failed");
            return await res.json();
        } catch (err) {
            console.warn("Profile fetch failed:", err.message);
            return { displayName: null, progress: {}, coursesRead: {} };
        }
    }

    function computeQuizStats(progress) {
        let totalDone = 0;
        const scores = [];
        for (const subj of Object.keys(progress || {})) {
            for (const qid of Object.keys(progress[subj] || {})) {
                const item = progress[subj][qid];
                if (item && item.completed) {
                    totalDone++;
                    if (typeof item.score === "number") scores.push(item.score);
                }
            }
        }
        const avg = scores.length ? Math.round(scores.reduce((a,b)=>a+b,0)/scores.length) : null;
        return { totalDone, avg };
    }

    function renderCourses(coursesRead) {
      const subjects = ["MATHEMATICS","CHEMISTRY","ENGLISH","SPORTS","AI"];
      coursesListEl.innerHTML = "";
      subjects.forEach(s => {
        const read = !!coursesRead[s];
        const item = document.createElement("div");
        item.className = "course-item";
        item.innerHTML = `
          <div style="font-weight:bold">${s}</div>
          <div class="course-toggle">
            <div class="switch ${read ? "on" : ""}" data-course="${s}" role="switch" aria-checked="${read}">
              <div class="knob"></div>
            </div>
          </div>
        `;
        coursesListEl.appendChild(item);
      });

      coursesListEl.querySelectorAll(".switch").forEach(sw => {
        sw.addEventListener("click", async (ev) => {
            const course = sw.getAttribute("data-course");
            const newState = !sw.classList.contains("on");
            
            sw.classList.toggle("on", newState);
            sw.setAttribute("aria-checked", newState);
            
          try {
            const res = await fetch(`${API_BASE}/api/profile/courses`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: userEmail, course, read: newState })
            });
            if (!res.ok) throw new Error("Server error");
            const data = await res.json();

          } catch (err) {
            console.warn("Failed to update course read:", err.message);

            sw.classList.toggle("on", !newState);
            sw.setAttribute("aria-checked", !newState);
            alert("Failed to save. Try again.");
          }
        });
      });
    }

    async function loadProfile() {
        const { displayName, progress, coursesRead } = await fetchProfile();
        profileNameEl.innerHTML = `Logged in as: <strong>${displayName || userEmail}</strong>`;

        const stats = computeQuizStats(progress || {});
        quizSummaryEl.innerHTML = "";
        const doneLine = document.createElement("div");
        doneLine.className = "line";
        doneLine.innerHTML = `Quizzes completed: <span class="score-badge">${stats.totalDone}</span>`;
        quizSummaryEl.appendChild(doneLine);
        const avgLine = document.createElement("div");
        avgLine.className = "line";
        avgLine.innerHTML = `Average score: <span class="score-badge">${stats.avg !== null ? stats.avg + "%" : "—"}</span>`;
        quizSummaryEl.appendChild(avgLine);

        renderCourses(coursesRead || {});
    }
})();