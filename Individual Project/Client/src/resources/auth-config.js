var authConfig = {
  baseUrl: "http://localhost:5000/api",
  loginUrl: '/users/login',
  tokenName: 'token',
  authHeader: 'Authorization',
  authToken: '',
  logoutRedirect: '#/home'
}
export default authConfig;
  