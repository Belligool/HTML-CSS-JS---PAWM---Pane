(async () => {
    function $(sel) { return document.querySelector(sel); }
  
    const form = $('#authForm');
    const toggle = $('#toggleMode');
    const emailEl = $('#email');
    const passEl = $('#password');
    const nameEl = $('#displayName');
    const errEl = $('#errorMsg');

    const API_BASE = "https://studee-tb-backend.vercel.app"; 

    let mode = 'login';

    function setLoggedIn(email){
      localStorage.setItem('st_logged_in', email);
    }

    function getLoggedIn(){
      return localStorage.getItem('st_logged_in');
    }

    function getRedirectTarget() {
      const params = new URLSearchParams(window.location.search);
      return params.get('redirect') || 'lessons.html';
    }
  
    if (getLoggedIn()) {
      window.location.href = getRedirectTarget();
      return;
    }

    function updateModeUI() {
      if (mode === 'login') {
        nameEl.style.display = 'none';
        toggle.textContent = "Don't have an account? Register →";
        errEl.style.display = 'none';
      } else {
        nameEl.style.display = 'block';
        toggle.textContent = "Already have an account? Login →";
        errEl.style.display = 'none';
      }
    }

    toggle.addEventListener('click', () => {
      mode = mode === 'login' ? 'register' : 'login';
      updateModeUI();
    });
    updateModeUI();

    async function sendRequest(path, data) {
      const url = `${API_BASE}${path.startsWith("/") ? path : `/${path}`}`;
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message || "Server error");
      return json;
    }

    form.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      errEl.style.display = 'none';
  
      const email = emailEl.value.trim().toLowerCase();
      const password = passEl.value.trim();
  
      if (!email || !password) {
        errEl.textContent = 'Please enter both email and password.';
        errEl.style.display = 'block';
        return;
      }

      try {
        if (mode === 'register') {
          await sendRequest("/api/register", { email, password });
          alert("Registration successful!");
        } else {
          await sendRequest("/api/login", { email, password });
          alert("Login successful!");
        }
        setLoggedIn(email);
        window.location.href = getRedirectTarget();
      } catch (err) {
        errEl.textContent = err.message;
        errEl.style.display = 'block';
      }
    });
})();