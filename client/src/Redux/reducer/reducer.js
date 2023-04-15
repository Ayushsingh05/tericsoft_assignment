import { ADD_DATA, FILTER_DATA } from "../action/types";

const oldState = {
  initialData: {},
  filterData: [],
  isData:false,
};

const reducer = (state = oldState, { type, payload }) => {
  switch (type) {
    case ADD_DATA:
      return {
        ...state,
        initialData: { ...state, initialData: payload },
        isData:true
      };
      case  FILTER_DATA :
        function filterdata(obj){
          let arr= obj[payload.objname];
           
          let filteredArray= arr.filter((el)=> el.category === payload.category);
          return filteredArray;
        }
        return {
            ...state,
            filterData: filterdata(state.initialData)
            }
    default:
      return state;
  }
};

export default reducer;
