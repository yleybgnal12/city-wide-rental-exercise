(function () {
  const usersKey = "wfe_users";

  function loadUsers() {
    try {
      return JSON.parse(localStorage.getItem(usersKey) || "[]");
    } catch (e) {
      return [];
    }
  }

  function saveUsers(users) {
    localStorage.setItem(usersKey, JSON.stringify(users));
  }

  function registerUser(user) {
    const users = loadUsers();
    const exists = users.some((u) => u.email === user.email);
    if (exists) return { ok: false, message: "User already registered" };
    users.push(user);
    saveUsers(users);
    return { ok: true };
  }

  function findUser(email) {
    const users = loadUsers();
    return users.find((u) => u.email === email);
  }

  function authenticate(email, password, role) {
    const user = findUser(email);
    if (!user) return { ok: false, code: "not_found" };
    if (user.password !== password) return { ok: false, code: "bad_password" };
    // role check: allow admin/superadmin only if role matches
    if (role && user.role && user.role !== role)
      return { ok: false, code: "role_mismatch" };
    return { ok: true, user };
  }

  function redirectToDashboardForRole(role) {
    if (role === "superadmin") return "dashboard-superadmin.html";
    if (role === "admin" || role === "lessor") return "dashboard-admin.html";
    return "dashboard-client.html";
  }

  // Expose to global
  window.WFEAuth = {
    registerUser,
    authenticate,
    redirectToDashboardForRole,
    loadUsers,
    findUser,
  };
})();
