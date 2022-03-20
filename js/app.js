function fazerLogin() {
  const url = window.location.href;
  const telaLogin = "http://127.0.0.1:5500/login.html";
  if (url !== telaLogin) {
    window.location.assign(telaLogin);
  }
}

