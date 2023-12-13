import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductData,
  setError,
  setLoading,
  setProducts,
} from "../redux/actions/productAction";
import axios from "axios";
import Loading from "../components/Loading";
import Card from "../components/Card";
import { getBasketData, setBasketLoading } from "../redux/actions/basketAction";

const MainPage = () => {
  const dispatch = useDispatch();
  //stora abone olma
  const state = useSelector((store) => store.productReducer);
  useEffect(() => {
    //store daki yükleniyor değerini güncelledik

    dispatch(setLoading());
    dispatch(setBasketLoading());

    //1. yolapi isteği atıcız cevaba göre storu bilgilendiricez
    /* axios
      .get("http://localhost:4000/products")
      .then((res) => dispatch(setProducts(res.data)))
      .catch((err) => dispatch(setError()));
    console.log(state); */

    // 2. yol thunk ile ürünlerisini alma
    dispatch(getProductData());


  //sepet verisi alma
  dispatch(getBasketData());
}, []);

  return (
    <div>
      {/* yükleniyorsa */}
      {state.isLoading && <Loading />}

      {/* hata olduysa */}
      {state.isError && <p> üzgünüz verileri alırken bir hata oluştu :( </p>}
      <div className="d-flex flex-wrap gap-4 p-5 justify-content-center">
        {/* veriler geldiyse */}
        {state?.products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
