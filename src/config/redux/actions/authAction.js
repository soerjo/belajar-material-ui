export const actionLogin = (user) => (dispatch) => {
  dispatch({ type: "LOADING_FIREBASE", payload: true });
  return new Promise((solve, reject) => {
    try {
      setTimeout(() => {
        dispatch({ type: "LOADING_FIREBASE", payload: false });
        solve(true);
      }, 2000);
    } catch (err) {
      reject(false);
    }
  });
};

export const actionRegist = () => {
  return { type: "LOADING_FIREBASE", payload: true };
};
