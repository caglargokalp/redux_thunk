import { ActionTypes } from "../actionTypes";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";

//SENKRON BİR AKSİYON

export const setBasketLoading = () => ({
  type: ActionTypes.SET_BASKET_LOADING,
});

export const setBasket = (payload) => ({
  type: ActionTypes.SET_BASKET,
  payload,
});

export const setBasketError = () => ({
  type: ActionTypes.SET_BASKET_ERROR,
});

//aSENKRON Aksiyonlar
//api dan sepetteki ürtünleri alıp
//stora aktarır

export const getBasketData = () => (dispatch) => {
  //ürün bilgilerine mikta

  axios
    .get("/basket")
    .then((res) => dispatch(setBasket(res.data)))
    .catch((err) => dispatch(setBasketError()));
};
export const addToBasket = (product) => (dispatch) => {
  //adet ekleme
  const newProduct = { ...product, adet: 1 };
  //verit abanına eklenmesi gerekmeyen verileri kaldırma

  delete newProduct.renk;
  delete newProduct.ozelliker;
  delete newProduct.baslik;

  axios
    .post("basket", newProduct)
    .then((res) =>
      dispatch({ type: ActionTypes.ADD_TO_BASKET, payload: product })
    )
    .catch((err) => setBasketError);
};
export const updataItem = (product) => (dispatch) => {
  axios.patch(`/basket/${product.id}`, { adet: product.adet + 1 }).then(() =>
    //api gücellenir se reducer i güncelleyicek
    //olan aksiyonu öalıştırı

    dispatch({ type: ActionTypes.UPDATE_ITEM, payload: product.id })
  );
};
export const removeItem = (delete_id) => (dispatch) => {
  axios.delete(`/basket/${delete_id}`).then(() =>
    //api gücellenir se reducer i güncelleyicek
    //olan aksiyonu öalıştırı

    dispatch({ type: ActionTypes.REMOVE_ITEM, payload: delete_id })
  );
};


