import ItemList from "./ItemList";
import { useState } from "react";
const ResCategory = ({ data, showItems, setShowIndex }) => {
  return (
    <div className="text-center">
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer" onClick={()=>setShowIndex()}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        <div>
        {showItems && <ItemList items={data.itemCards} />     }
        </div>
      </div>
    </div>
  );
};

export default ResCategory;
