import { useDispatch, useSelector } from "react-redux";
import FoodItems from "./FoodItems";
import {clearCart} from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  }
  /*<div className="flex">{cartItems.map((item)=>(
        <FoodItems key={item.id} {...item}/>
      ))}</div>*/

  return (
    <div className="text-center m-10 p-10">
      <h1 className="text-3xl font-bold">Cart Items - {cartItems.length}</h1>
      <div className="w-6/12 m-auto">
        <button className="p-2 m-2 bg-green-500 font-bold" onClick={() => handleClearCart()}>Clear Cart</button>
        <ItemList items={cartItems}/>
      </div>       
    </div>
  );
};

export default Cart;
