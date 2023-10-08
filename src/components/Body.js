import React, { useState, useEffect } from "react";
import RestruarantCards from "./RestruarantCards";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import { GrNotification } from "react-icons/gr";
import EmptyFavTab from "../assets/Empty-fav-tab-img.png";
import ArrowIcon from "../assets/arrow-icon.png";
import DownArrow from '../assets/down-arrow.png' 


const Body = () => {
  const [AlllistOfRestuarants, setAlllistOfRestuarants] = useState([]);
  const [filteredlistOfRestuarants, setfilteredlistOfRestuarants] = useState([]);
  const [favlist, setFavList] = useState([]);
  const [showFav, setShowFav] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [message, setMessage] = useState(null);
  const [ratingFilter, setRatingFilter] = useState("");
  const [showDropdown, setShowDropdown] = useState(false); 

  useEffect(() => {
    // Fetch API
    getRestaurants();
  }, []);

  // Search function
  function initiateSearch() {
    const data = filterData(searchText, AlllistOfRestuarants);
    setfilteredlistOfRestuarants(data);
    if (data.length === 0 && searchText !== "") {
      setfilteredlistOfRestuarants([]);
    }
  }

  // Listening to Enter key press
  const handleKeyUp = (e) => {
    // Check if keypressed is the Enter key (key code 13)
    if (e.keyCode === 13) {
      initiateSearch();
    }
  };

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
        It appears that the user is currently offline
      </h3>
    );
  }

  const onClickFav = (id) => {
    let idx = favlist.indexOf(id);
    if (idx >= 0) {
      favlist.splice(idx, 1);
      setMessage("Restaurant removed from the favorite list");
    } else {
      favlist.push(id);
      setMessage("Restaurant added to the favorite list");
    }
    setFavList([...favlist]);
    setTimeout(() => {
      setMessage(null);
    }, 2000);
    if (showFav) {
      setfilteredlistOfRestuarants(
        filteredlistOfRestuarants.filter((it) => it.info.id !== id)
      );
    }
  };

 
  useEffect(() => {
    let filteredList = AlllistOfRestuarants;
    if (ratingFilter === "Filter") {
      filteredList = AlllistOfRestuarants.filter((res) => res.info.avgRating > 0);
    } else if (ratingFilter === "4.2+") {
      filteredList = AlllistOfRestuarants.filter((res) => res.info.avgRating >= 4.2);
    } else if (ratingFilter === "HighToLow") {
      filteredList = [...AlllistOfRestuarants].sort((a, b) => b.info.avgRating - a.info.avgRating);
    } else if (ratingFilter === "LowToHigh") {
      filteredList = [...AlllistOfRestuarants].sort((a, b) => a.info.avgRating - b.info.avgRating);

    }
    setfilteredlistOfRestuarants(filteredList);
  }, [ratingFilter, AlllistOfRestuarants]);


  if (!AlllistOfRestuarants) return null;

  return (
    <>
      <div className="search-container ml-auto p-4 border-black ">
        {filteredlistOfRestuarants?.length === 0 && searchText !== "" ? (
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-center font-serif">
              The restaurant you're searching for doesn't exist.
            </h2>
            <button
              className="text-xs font-medium shadow-md px-2 py-2 outline-none ml-0 right-10 border border-gray-300 bg-orange-500 hover:border-gray-500 transition-all duration-200 ease-in-out text-white rounded-none"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Go back to Home
            </button>
          </div>
        ) : (
          
            <div className="flex flex-col md:flex-row items-center md:pl-96 md:items-centre md:pl-9">
              <div className="flex items-center ">
                <input
                  type="text"
                  className="w-64 text-xs border border-gray-300 shadow-md focus:border-gray-500 transition-all duration-300 px-2 py-2 outline-none  rounded-none md:mr-4"
                  placeholder="Search Restaurants"
                  value={searchText}
                  onKeyUp={handleKeyUp}
                  onChange={(e) => {
                    setSearchText(e.target.value);
                  }}
                />

                <button
                  data-testid="search-btn"
                  className="text-xs font-medium shadow-md px-2 py-2 outline-none ml-0 md:mr-2 right-10 rounded border border-gray-300 bg-orange-500 hover:border-gray-500 transition-all duration-200 ease-in-out text-white rounded-none md:bg-white md:text-black"
                  onClick={() => initiateSearch()}
                >
                  Search
                </button>
              </div>
              <div className="flex items-center mt-2 md:mt-0">
               
                <span style={{justifyContent: 'center', alignItems: 'center'}}
                  className={`text-xs flex-row flex gap-3 font-medium shadow-md px-2 outline-none m-2 right-10 rounded border border-gray-300 hover:border-gray-500 transition-all duration-200 ease-in-out text-black cursor-pointer ${
                    showFilter ? "border-orange-300 text-orange-300 hover:border-orange-500" : ""
                  }`}
                  onClick={() => {
                    setRatingFilter(showDropdown ? "All" : "4+");
                    setShowFilter(!showFilter);
                    setShowFav(false);
                  }}
                >
                  Filter : {showDropdown ? "All" : ratingFilter} 
                 <div>
                      <button
                        onClick={() => setShowDropdown(!showDropdown)}
                        type="button"
                        className="text-xs mx-0  font-medium shadow-md px-2 py-2 outline-none m-2 right-10 rounded border border-gray-300 hover:border-gray-500 transition-all duration-200 ease-in-out text-black cursor-pointer"
                        id="dropdown-menu"
                        aria-haspopup="true"
                        aria-expanded="true"
                      >
                        {showDropdown ? <img src={`${DownArrow}`} width={12} height={12} /> : <img className="transform rotate-180" width={12} height={12} src={`${DownArrow}`} />}
                      </button>
                    </div>
                  
                </span>
                {showFilter && (
                  <div className="relative inline-block text-left">
                    
                    {showDropdown && (
                      <div
                        className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="dropdown-menu"
                      >
                        <div className="py-1 z-10">
                          <button
                            onClick={() => setRatingFilter("4.2+")}
                            className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                          >
                            4.2+
                          </button>
                          <button
                            onClick={() => setRatingFilter("HighToLow")}
                            className="w-full block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 "
                            role="menuitem"
                          >
                            High To Low
                          </button>
                          <button
                            onClick={() => setRatingFilter("LowToHigh")}
                            className="w-full block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 "
                            role="menuitem"
                          >
                            Low to High
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
                <span
                  className={`text-xs font-medium shadow-md px-2 py-2 outline-none m-2 right-10 rounded border border-gray-300 hover:border-gray-500 transition-all duration-200 ease-in-out text-black cursor-pointer ${
                    showFav ? "border-orange-300 text-orange-300 hover:border-orange-500" : ""
                  }`}
                  onClick={() => {
                    let filteredList = AlllistOfRestuarants;
                    if (!showFav) {
                      filteredList = AlllistOfRestuarants.filter((res) => favlist.includes(res.info.id));
                    }
                    setRatingFilter("");
                    setShowFav(!showFav);
                    setShowFilter(false);
                    setfilteredlistOfRestuarants(filteredList);
                  }}
                >
                  Favorites
                </span>
              </div>
            </div>
          

        )}
      </div>
      <div>
        {filteredlistOfRestuarants.length > 0 ? (
          <div className="px-14 md:px-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
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
                Find your favorite restaurants now
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