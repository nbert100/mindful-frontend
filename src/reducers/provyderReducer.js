export default function provyderReducer(state = [], action) {
  console.log(9);

  switch (action.type) {
    case "FETCH_PROVYDERS":
      return action.payload;
    case "ADD_PROVYDER":
      return [...state, action.payload];
    default:
      return state;
  }
}
