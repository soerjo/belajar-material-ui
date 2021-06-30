export const actionLogin = (user) => (dispatch) => {
  dispatch({ type: "LOADING_FIREBASE", payload: true });
  return new Promise((solve, reject) => {
    try {
      setTimeout(() => {
        dispatch({ type: "LOGIN_FIREBASE", payload: user });
        dispatch({ type: "LOADING_FIREBASE", payload: false });
        solve(true);
      }, 2000);
    } catch (err) {
      reject(false);
    }
  });
};

export const actionLogout = () => (dispatch) => {
  dispatch({ type: "LOADING_FIREBASE", payload: true });
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        dispatch({ type: "lOGOUT_FIREBASE" });
        dispatch({ type: "LOADING_FIREBASE", payload: false });
        resolve(true);
      }, 1000);
    } catch (err) {
      reject(err);
    }
  });
};

export const actionRegist = () => {
  return { type: "LOADING_FIREBASE", payload: true };
};
