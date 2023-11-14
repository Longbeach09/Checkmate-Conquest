const initialState = {
  isAuthenticated: false,
  username: null,
  //   user: [
  //     { user_id: "1", username: "test user", password: "asdf", email: "g@g.com" },
  //   ],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "authenticated":
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload,
      };
    case "logout":
      return {
        ...state,
        isAuthenticated: false,
        username: null,
      };

    // Add other cases for different action types if needed

    default:
      return state;
  }
};

export default authReducer;
