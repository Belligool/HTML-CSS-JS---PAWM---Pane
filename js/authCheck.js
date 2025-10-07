(function() {
    const loggedInEmail = localStorage.getItem('st_logged_in');
  
    if (!loggedInEmail) {
        const redirectTo = encodeURIComponent(window.location.pathname.split('/').pop());
        window.location.href = `login.html?redirect=${redirectTo}`;
        return;
    }
  
    // Optional: expose helper globally
    window.getCurrentUser = function() {
        try {
            const users = JSON.parse(localStorage.getItem('st_users')) || {};
            const user = users[loggedInEmail];
            return { email: loggedInEmail, displayName: user?.displayName || null };
        } catch {
            return { email: loggedInEmail };
        }
    };

    const user = getCurrentUser();
    console.log("Current logged-in user:", user);

})();