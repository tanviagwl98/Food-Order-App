import { useSelector } from "react-redux";
import FoodItems from "./FoodItems";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div>
      <h1 className="text-3xl font-bold">Cart Items - {cartItems.length}</h1>
      <div className="flex">{cartItems.map((item)=>(
        <FoodItems key={item.id} {...item}/>
      ))}</div> 
    </div>
  );
};

export default Cart;
