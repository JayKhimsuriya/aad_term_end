const is = { data: [] };
export const dataReducer = (state = is, action) => {
  console.log(state, action, "Data Reducer");
  switch (action.type) {
    case "addData": {
      console.log(action, "data reducer");
      return {
        ...state,
        data: [action.payload, ...state.data],
      };
    }
    case "delData": {
      return {
        ...state,
        data: state.data.filter((data) => {
          return data.ID != action.payload;
        }),
      };
    }
    case "updateData": {
      return {
        ...state,
        data: state.data.map((data) => {
          return data.ID === action.payload.ID ? action.payload : data;
        }),
      };
    }

    default:
      return state;
  }
};
