import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../config";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

  const dispatch = useDispatch();
  
  const handleAddItem = (item) => {
    dispatch(addItem(item))
  }
  
  return (
    <div className="text-left">
      {items.map((i) => {
        return (
          <div
            key={i.card.info.id}
            className="p-2 m-2 border-b-2 flex justify-between"
          >
            <div className="9/12">
              <div className="py-2">
                <span>{i.card.info.name}</span>
                <span>
                  - ₹
                  {i?.card?.info?.price
                    ? i?.card?.info?.price / 100
                    : i?.card?.info?.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{i?.card?.info?.description}</p>
            </div>
            <div className="w-3/12 p-4">
              <div className="absolute">
                <button className="p-2 mx-16 rounded-lg shadow-lg bg-green-700 text-white"
                onClick={()=>handleAddItem(i)}
                >
                  Add +
                </button>
              </div>
              <img src={IMG_CDN_URL + i.card.info.imageId} className="w-full" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
