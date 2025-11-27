import { ADMIN_LOGIN_SUCCESS, ADMIN_LOGOUT } from './AdminAuthAction';

const initialState = {
  isAdminAuthenticated: false,
  adminData: null,
};

const adminAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        isAdminAuthenticated: true,
        adminData: action.payload,
      };
    case ADMIN_LOGOUT:
      return {
        ...state,
        isAdminAuthenticated: false,
        adminData: null,
      };
    default:
      return state;
  }
};

export default adminAuthReducer;
