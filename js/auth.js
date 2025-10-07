(async () => {
    function $(sel) { return document.querySelector(sel); }
  
    async function sha256Hex(str) {
        const enc = new TextEncoder();
        const data = enc.encode(str);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }
  
    function loadUsers() {
        try {
          const raw = localStorage.getItem('st_users');
          return raw ? JSON.parse(raw) : {};
        } catch (e) {
          console.error('failed parse users', e);
          return {};
        }
    }
  
    function saveUsers(usersObj) {
        localStorage.setItem('st_users', JSON.stringify(usersObj));
    }
  
    function setLoggedIn(email) {
        localStorage.setItem('st_logged_in', email);
    }
  
    function getLoggedIn() {
        return localStorage.getItem('st_logged_in');
    }
  
    function getRedirectTarget() {
        const params = new URLSearchParams(window.location.search);
        return params.get('redirect') || 'lessons.html';
    }
  
    const form = $('#authForm');
    const toggle = $('#toggleMode');
    const emailEl = $('#email');
    const passEl = $('#password');
    const nameEl = $('#displayName');
    const errEl = $('#errorMsg');
  
    let mode = 'login';
  
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
  
    form.addEventListener('submit', async (ev) => {
        ev.preventDefault();
        errEl.style.display = 'none';
        
        const email = (emailEl.value || '').trim().toLowerCase();
        const password = (passEl.value || '');
        const displayName = (nameEl.value || '').trim();
        
        if (!email || !password) {
          errEl.textContent = 'Please enter both email and password.';
          errEl.style.display = 'block';
          return;
        }
      
        if (!/^\S+@\S+\.\S+$/.test(email)) {
          errEl.textContent = 'Please enter a valid email address.';
          errEl.style.display = 'block';
          return;
        }
      
        const users = loadUsers();
      
        const pwdHash = await sha256Hex(password);
      
        if (mode === 'register') {
          if (users[email]) {
            errEl.textContent = 'An account with this email already exists. Try logging in.';
            errEl.style.display = 'block';
            return;
          }
          users[email] = {
            passwordHash: pwdHash,
            displayName: displayName || email.split('@')[0],
            createdAt: new Date().toISOString()
          };
          saveUsers(users);
          setLoggedIn(email);
          window.location.href = getRedirectTarget();
        } else {
          const user = users[email];
          if (!user) {
            errEl.textContent = 'No account found for this email. Try registering.';
            errEl.style.display = 'block';
            return;
          }
          if (user.passwordHash !== pwdHash) {
            errEl.textContent = 'Incorrect password.';
            errEl.style.display = 'block';
            return;
          }
          setLoggedIn(email);
          window.location.href = getRedirectTarget();
        }
    });
  
})();
  