export function saveUser(user) {
  localStorage.setItem("cele_user", JSON.stringify(user));
}

export function getUser() {
  const user = localStorage.getItem("cele_user");
  return user ? JSON.parse(user) : null;
}

export function clearUser() {
  localStorage.removeItem("cele_user");
}