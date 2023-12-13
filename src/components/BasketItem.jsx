import { useDispatch } from "react-redux";
import { ActionTypes } from "../redux/actionTypes";
import { removeItem, updataItem } from "../redux/actions/basketAction";

const BasketItem = ({ item }) => {
    const dispatch=useDispatch()
  return (
    <div className="rounded-2 p-4 bg-white d-flex justify-content-between align-items-center my-5 text-black">
      <div className="d-flex align-items-center gap-5" >
        <img className="rounded-2"  width={60} height={60} src={item.resim} alt="" />
     
      <h4>
        <span>{item.marka} </span>
        <span>{item.model} </span>
      </h4>
      <h4 className="text-success"> {item.fiyat} $</h4>
    </div>

    <div className="d-flex align-items-center gap-2">
     <h6>Miktar: {item.adet} </h6>
     <button onClick={() => dispatch(updataItem(item))} className="btn btn-sm btn-primary">+</button>
     <button onClick={() => dispatch(removeItem(item.id))} className="btn btn-sm btn-danger">X</button>
    </div>
  </div>
  );
};

export default BasketItem;
