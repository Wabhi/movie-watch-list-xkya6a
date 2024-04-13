// userService.js
class UserService {
  static getWatchlist(email) {
    const watchlist = JSON.parse(localStorage.getItem(email)) || [];
    return watchlist;
  }

  static updateWatchlist(email, watchlist) {
    localStorage.setItem(email, JSON.stringify(watchlist));
  }
}

export default UserService;
