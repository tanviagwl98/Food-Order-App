
import { IMG_CDN_URL } from "../config";

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="w-[250px] p-2 m-2 shadow-lg rounded-lg bg-gray-100 hover:bg-gray-200">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  );
};

export default RestrauntCard;
