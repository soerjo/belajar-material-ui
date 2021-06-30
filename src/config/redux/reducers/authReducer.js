const initState = {
  user: {
    email: "",
    password: "",
  },
  isLoading: false,
  isLogin: false,
  isregist: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOADING_FIREBASE": {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case "LOGIN_FIREBASE": {
      return {
        ...state,
        user: action.payload,
      };
    }
    case "lOGOUT_FIREBASE": {
      return {
        ...state,
        user: {
          email: "",
          password: "",
        },
      };
    }
    default:
      return state;
  }
};

export default authReducer;
