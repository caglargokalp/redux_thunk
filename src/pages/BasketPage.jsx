import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBasketData, setBasketLoading } from "../redux/actions/basketAction";
import Loading from "../components/Loading";
import BasketItem from "../components/BasketItem.JSX";

const BasketPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.basketReducer);

  useEffect(() => {
    dispatch(setBasketLoading());
    //sepetteki ürünleri api dan alıp
    //stora aktarılacak aksiyon
    dispatch(getBasketData());
  }, []);

  const total_count = state.basket.reduce(
    (total, item) => total + item.adet*item.fiyat,
    0
  );
  return (
    <div className="container">
      {/* ürünler yüklenirken */}
      {state.isLoading && <Loading />}

      {/* hata olursa */}
      {state.isError && <p>üzgünüz sepet verilerini alırken bir hata oluştı</p>}

      {/* veriler gerise */}
      {state.basket.length > 0 ? (
        state.basket.map((item) => <BasketItem item={item} key={item.id} />)
      ) : (
        <p className="my-5 text-center">öncelikle sepete bir ürün ekleyiniz</p>
      )}

      <div className="col-md-3 w-100 bg-white text-black p-5 rounded">
        <h5>Toplam tutar: {total_count  } </h5>
        <button>Alışverişi Tamamla</button>
      </div>
    </div>
  );
};

export default BasketPage;
