import React from "react";
import RestruarantCards from "./RestruarantCards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import { GrNotification } from "react-icons/gr";
import { BiSort } from "react-icons/bi";
import EmptyFavTab from "../assets/Empty-fav-tab-img.png";
import ArrowIcon from "../assets/arrow-icon.png";

const Body = () => {
  const [AlllistOfRestuarants, setAlllistOfRestuarants] = useState([]);
  const [filteredlistOfRestuarants, setfilteredlistOfRestuarants] = useState(
    []
  );
  let [favlist, setFavList] = useState([]);
  const [showFav, setShowFav] = useState(false);
  const [showFitler, setShowFitler] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [message, setMessage] = useState(null);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    // Fetch API
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    setAlllistOfRestuarants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredlistOfRestuarants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  const isOnline = useOnline();
  if (!isOnline) {
    return (
      <h3 className="flex flex-col items-center justify-center font-serif h-screen bg-gray-100 text-2xl font-bold text-red-500 mb-4">
        {" "}
        it appears that the user is currently offline
      </h3>
    );
  }

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const onClickFav = (id) => {
    let idx = favlist.indexOf(id);
    if (idx >= 0) {
      favlist.splice(idx, 1);
      setMessage("Resturant removed from favorite list");
    } else {
      favlist.push(id);
      setMessage("Resturant added to favorite list");
    }
    setFavList(favlist);
    setTimeout(() => {
      setMessage(null);
    }, 2000);
    if (showFav) {
      setfilteredlistOfRestuarants(
        filteredlistOfRestuarants.filter((it) => it.info.id !== id)
      );
    }
  };

  const handleRatings = (e) => {
    let filteredList = [...AlllistOfRestuarants].filter(
      (res) => res.info.avgRating >= e.target.value
    );
    setShowFav(false);
    setfilteredlistOfRestuarants(filteredList);
  };

  // avoid rendering component (Early)
  if (!AlllistOfRestuarants) return null;
  return AlllistOfRestuarants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container ml-auto p-4 border-black ">
        {filteredlistOfRestuarants?.length === 0 && searchText !== "" ? (
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-center font-serif">
              The restaurant you're searching for doesn't exist.
            </h2>
            <button
              className="text-xs font-medium shadow-md px-2 py-2 outline-none ml-0 right-10 rounded border border-gray-300 bg-orange-500 hover:border-gray-500 transition-all duration-200 ease-in-out text-white rounded-none"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Go back to Home
            </button>
          </div>
        ) : (
          <>
            <div className="flex flex-col md:flex-row items-center md:pl-96  md:items-centre md:pl-9">
              <div className="flex items-center ">
                <input
                  type="text"
                  className="w-64 text-xs border border-gray-300 shadow-md focus:border-gray-500 transition-all duration-300 px-2 py-2 outline-none  rounded-none md:mr-4"
                  placeholder="Search Restaurants"
                  value={searchText}
                  onChange={(e) => {
                    setSearchText(e.target.value);
                  }}
                />

                <button
                  data-testid="search-btn"
                  className="text-xs font-medium shadow-md px-2 py-2 outline-none ml-0 md:mr-2 right-10 rounded border border-gray-300 bg-orange-500 hover:border-gray-500 transition-all duration-200 ease-in-out text-white rounded-none md:bg-white md:text-black"
                  onClick={() => {
                    const data = filterData(searchText, AlllistOfRestuarants);
                    setfilteredlistOfRestuarants(data);
                    if (data.length === 0 && searchText !== "") {
                      setfilteredlistOfRestuarants([]);
                    }
                  }}
                >
                  Search
                </button>

                <div className="relative inline-block">
                  <button
                    data-testid="search-btn"
                    className="text-xs font-medium shadow-md px-2 py-2 outline-none m-2 right-10 rounded border border-gray-300 hover:border-gray-500 transition-all duration-200 ease-in-out text-gray-700"
                    onClick={toggleDropdown}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <span style={{ color: "red", marginRight: "5px" }}>
                      <BiSort />
                    </span>
                    Sort by
                  </button>
                  {isDropdownVisible && (
                    <div
                      className="absolute mt-1 w-36 bg-white border border-gray-300 shadow-md rounded"
                      style={{ zIndex: 10 }}
                    >
                      <ul className="py-1">
                        <li
                          className="px-4 py-2 cursor-pointer hover:bg-gray-200 text-xs font-medium"
                          onClick={() => {
                            setDropdownVisible(false);

                            let filteredList = [...AlllistOfRestuarants];
                            const parsedCosts = filteredlistOfRestuarants.map(
                              (ele) => {
                                const arr = ele.info.costForTwo.split(" ");
                                const cost = parseInt(
                                  arr[0].replace("₹", "").replace("$", ""),
                                  10
                                );
                                return { restaurant: ele, cost };
                              }
                            );
                            parsedCosts.sort((a, b) => a.cost - b.cost);
                            filteredList = parsedCosts.map(
                              (item) => item.restaurant
                            );

                            setfilteredlistOfRestuarants(filteredList);
                          }}
                        >
                          Price low to high
                        </li>
                        <li
                          className="px-4 py-2 cursor-pointer hover:bg-gray-200 text-xs font-medium"
                          onClick={() => {
                            setDropdownVisible(false);

                            let filteredList = [...AlllistOfRestuarants];
                            const parsedCosts = filteredlistOfRestuarants.map(
                              (ele) => {
                                const arr = ele.info.costForTwo.split(" ");
                                const cost = parseInt(
                                  arr[0].replace("₹", "").replace("$", ""),
                                  10
                                );
                                return { restaurant: ele, cost };
                              }
                            );
                            parsedCosts.sort((a, b) => b.cost - a.cost);
                            filteredList = parsedCosts.map(
                              (item) => item.restaurant
                            );

                            setfilteredlistOfRestuarants(filteredList);
                          }}
                        >
                          Price high to low
                        </li>

                        <li
                          className="px-4 py-2 cursor-pointer hover:bg-gray-200 text-xs font-medium"
                          onClick={() => {
                            setDropdownVisible(false);

                            let filteredList = [...AlllistOfRestuarants];
                            filteredList.sort(
                              (a, b) => b.info.avgRating - a.info.avgRating
                            );

                            setfilteredlistOfRestuarants(filteredList);
                          }}
                        >
                          Rating
                        </li>

                        <li
                          className="px-4 py-2 cursor-pointer hover:bg-gray-200 text-xs font-medium"
                          onClick={() => {
                            setDropdownVisible(false);
                          }}
                        >
                          Discount
                        </li>

                        <li
                          className="px-4 py-2 cursor-pointer hover:bg-gray-200 text-xs font-medium"
                          onClick={() => {
                            setDropdownVisible(false);

                            let filteredList = [...AlllistOfRestuarants];

                            setfilteredlistOfRestuarants(filteredList);
                          }}
                        >
                          Reset
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center  mt-2  md:mt-0">
                <span
                  className={`text-xs font-medium shadow-md px-2 py-2 outline-none m-2 right-10 rounded border border-gray-300 hover:border-gray-500 transition-all duration-200 ease-in-out text-black cursor-pointer`}
                  onClick={() => setDropdownVisible(false)}
                >
                  Rating:
                  <select
                    className="w-24 text-md pr-2.5 outline-none border-none"
                    onChange={handleRatings}
                  >
                    <option className="text-base font-semibold" value={0}>
                      All
                    </option>
                    <option className="text-base font-semibold" value={4}>
                      4.0+
                    </option>
                    <option className="text-base font-semibold" value={3}>
                      3.0+
                    </option>
                    <option className="text-base font-semibold" value={2}>
                      2.0+
                    </option>
                  </select>
                </span>
                <span
                  className={`text-xs font-medium shadow-md px-2 py-2 outline-none m-2 right-10 rounded border border-gray-300 hover:border-gray-500 transition-all duration-200 ease-in-out text-black cursor-pointer ${
                    showFav
                      ? "border-orange-300 text-orange-300 hover:border-orange-500"
                      : ""
                  }`}
                  onClick={() => {
                    let filteredList = AlllistOfRestuarants;
                    if (!showFav) {
                      filteredList = AlllistOfRestuarants.filter((res) =>
                        favlist.includes(res.info.id)
                      );
                    }
                    setShowFav(!showFav);
                    setShowFitler(false);
                    setfilteredlistOfRestuarants(filteredList);
                  }}
                >
                  Favourites
                </span>
              </div>
            </div>
          </>
        )}
      </div>
      <div>
        {filteredlistOfRestuarants.length > 0 ? (
          <div className="px-14 md:px-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {filteredlistOfRestuarants.map((restaurant) => (
              <RestruarantCards
                key={restaurant?.info.id}
                id={restaurant?.info?.id}
                resData={restaurant?.info}
                favlist={favlist}
                onClickFav={onClickFav}
              />
            ))}
          </div>
        ) : (
          <div className="h-full w-full flex justify-center items-center px-10 flex-col">
            <img src={EmptyFavTab} alt="icon" className="mt-8" />
            <div className="flex sm:flex-row flex-col items-center mt-2">
              <span className="sm:text-start text-center">
                Find your favourite restaurants now
              </span>
              <button
                className="sm:ms-2 sm:mt-0 mt-2"
                style={{
                  backgroundColor: "rgb(255, 99, 71,0.5)",
                  borderRadius: "8px",
                  padding: "2px",
                }}
                type="button"
                onClick={() => (window.location.href = "/")}
              >
                <img src={ArrowIcon} alt="arrow" height={30} width={30} />
              </button>
            </div>
          </div>
        )}
      </div>
      <div>
        {message && (
          <div
            style={{ right: 0, top: 40, position: "fixed" }}
            className="z-10 absolute fixed w-100 border-2 border-orange-300 block p-2 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] rounded-lg flex flex-row items-center"
          >
            <span style={{ color: "red", padding: "10px" }}>
              <GrNotification />
            </span>
            <span>{message}</span>
          </div>
        )}
      </div>
    </>
  );
};

export default Body;
