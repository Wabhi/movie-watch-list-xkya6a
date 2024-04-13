// authService.js
class AuthService {
  static login(email) {
    // Simulate login with email address
    return Promise.resolve({ email });
  }

  static logout() {
    // Simulate logout
    return Promise.resolve();
  }

  static signUp(email) {
    // Simulate sign up with email address
    return Promise.resolve({ email });
  }
}

export default AuthService;
