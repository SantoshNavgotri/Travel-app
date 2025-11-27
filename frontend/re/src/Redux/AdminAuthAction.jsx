export const ADMIN_LOGIN_SUCCESS = 'ADMIN_LOGIN_SUCCESS';
export const ADMIN_LOGOUT = 'ADMIN_LOGOUT';

export const adminLoginSuccess = (adminData) => ({
  type: ADMIN_LOGIN_SUCCESS,
  payload: adminData,
});

export const adminLogout = () => ({
  type: ADMIN_LOGOUT,
});
