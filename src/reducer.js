const initialState = {
  user: [
    { user_id: "1", username: "test user", password: "asdf", email: "g@g.com" },
  ],
};

const userReducer = (state = initialState, action) => {
  return state;
};

// export default function reducer(action, state = initialState) {
//   switch (action.type) {
//     case "increment":

//     default:
//       return state; // return the existing state unchanged
//   }
// }

export default userReducer;
