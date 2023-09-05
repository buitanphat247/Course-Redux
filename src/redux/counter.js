// const initialState = {
//   count: 0,
// };

// // actions
// export const increment = () => ({
//   type: "increment",
// });
// export const decrement = () => ({
//   type: "decrement",
// });
// export const increasebyvalue = (value) => ({
//   type: "increasebyvalue",
//   payload: {
//     value_increase: value,
//   },
// });

// // reducers
// export function counterReducer(state = initialState, action) {
//   console.log(action);
//   switch (action.type) {
//     case "increment": {
//       return {
//         ...state,
//         count: state.count + 1,
//       };
//     }
//     case "decrement": {
//       return {
//         ...state,
//         count: state.count - 1,
//       };
//     }
//     case "increasebyvalue": {
//       return {
//         ...state,
//         count: state.count + action.payload.value_increase,
//       };
//     }
//     default: {
//       return {
//         ...state,
//       };
//     }
//   }
// }
