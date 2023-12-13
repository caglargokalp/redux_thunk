import { useDispatch, useSelector } from "react-redux";
import { addToBasket, updataItem } from "../redux/actions/basketAction";

const Card = ({ product }) => {

  
  const state = useSelector((store)=> store.basketReducer)
  const dispatch =useDispatch();

  //eleman sepete eklendi mi kontrol etme


  const found =state.basket.find((i)=> i.id === product.id);





  //sepete ekle butonu
  const handleClick=()=>{
    if(found){
      //sepetteki elemanı güncelle >patch
      dispatch(updataItem(found))

    }
else{
  //sepete yeni eleman ekle >post
  dispatch(addToBasket(product));
}


  };

  return (
    <div className="card pt-4" style={{ width: "18rem" }}>
      <div className="d-flex justify-content-center">
        <img className="rounded" width={200} height={200} src={product.resim} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{product.baslik} </h5>
        <p className="fw-bold">
          {product.marka} {product.model}
        </p>
        <p className="d-flex flex-column">  {product.ozellikler.map((line)=> (<span>{line} </span>  ))} </p>

        <button onClick={handleClick} className="w-100 d-flex justify-content-between">
          <span>
            {found ? ` Miktarı arttır (${found.adet})`: "Sepete Ekle"}
            </span>
          <span className="text-success"> {product.fiyat}$ </span>
        </button>
      </div>
    </div>
  );
};

export default Card;
