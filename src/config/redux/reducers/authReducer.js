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
    case "LOGIN_FIREBASE":
      return {
        ...state,
        isLogin: action.payload,
      };
    case "REGIST_FIREBASE":
      return {
        ...state,
        isregist: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
