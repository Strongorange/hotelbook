import { useEffect } from "react";
import useFetch from "../../utils/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading } = useFetch("/hotels?featured=true&limit=5");

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="fp">
      {loading ? (
        "Loading..."
      ) : (
        <>
          {data?.map((item, index) => {
            return (
              <div className="fpItem" key={index}>
                <img src={item.photos[0]} alt="" className="fpImg" />
                <span className="fpName">{item.name}</span>
                <span className="fpCity">{item.city}</span>
                <span className="fpPrice">
                  Starting from ${item.cheapestPrice}
                </span>
                {item.rating && (
                  <div className="fpRating">
                    <button>{item.rating}</button>
                    <span>Excellent</span>
                  </div>
                )}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
