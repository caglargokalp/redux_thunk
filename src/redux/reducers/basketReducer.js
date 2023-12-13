import { ActionTypes } from "../actionTypes";

const initalState = {
  isLoading: true,
  isError: false,
  basket: [],
};

const basketReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_BASKET_LOADING:
      return { ...state, isLoading: true };

    case ActionTypes.SET_BASKET_ERROR:
      return { ...state, isLoading: false, isError: true };

    case ActionTypes.SET_BASKET:
      return { ...state, isLoading: false, isError: false, basket: payload };

    case ActionTypes.ADD_TO_BASKET:
      return { ...state, basket: state.basket.concat(payload) };

    case ActionTypes.UPDATE_ITEM:
      const newBasket = state.basket.map((item) => {
        //eğer ki elam güncellenecek elemansa
        if (item.id === payload) {
          return { ...item, adet: item.adet + 1 };
        } else {
          return item;
        }
      });
      return { ...state, basket: newBasket };

    //silicenecek id ye
    case ActionTypes.REMOVE_ITEM:
      const filterd = state.basket.filter((i) => i.id !== payload);
      return { ...state, basket: filterd };

    default:
      return state;
  }
};

export default basketReducer;
