import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="p-4 m-4 text-center">
      <h1 className="font-bold text-xl">Cart</h1>
      <button
        className="m-2 p-2 bg-black text-white rounded-lg"
        onClick={handleClearCart}
      >
        clear cart
      </button>
      {cartItems.length === 0 && (
        <h2 className="text-lg mt-4">
          Cart empty! please add items to your cart.
        </h2>
      )}
      <div className="w-6/12 m-auto">
        <ItemList data={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
