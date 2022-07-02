const signinReducer = (state, action) => {
  switch (action.type) {
    case "FIELDS":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "LOGIN":
      return {
        ...state,
        isSignin: action.payload,
        coocki: Math.random()
      };
    case "ERROR":
        return {
            ...state,
            error: action.payload,
            errorMessage: 'Not Valid Username or Password'
        }
    case "SET_COOCKI":
      localStorage.setItem('coocki', JSON.stringify(state.coocki))
    default:
      return state;
  }
};

export default signinReducer;
