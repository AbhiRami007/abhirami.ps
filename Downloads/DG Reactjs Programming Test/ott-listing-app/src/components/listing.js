import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import './listing.css'
const Listing = () => {
  const listItems = useSelector((state) => state.listItems);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(() => {
    console.log(listItems);
    dispatch({ type: "LIST_ITEM" });
    console.log(listItems);
  }, []);

  const goBackToHome = () => {
    navigate("/");
  };
  return (
    <>
      <div class="relative">
        <header class="sticky top-0 w-full px-4 py-5 text-white bg-[url('/public/Slices/nav_bar.png')] ">
          <div class="grid grid-cols-2">
            <span class="text-white">
              <i class="fa fa-arrow-left fa-1x" onClick={goBackToHome}></i>{" "}
              {listItems[0].page.title}
            </span>
          </div>
        </header>

        <div class="grid grid-cols-3 gap-3 m-3">
          {listItems[0].page["content-items"].content.map((item) => {
            return (
              <div class="rounded-none max-w-sm  overflow-hidden shadow-lg mb-5">
                <img
                  
                  class="w-full custom"
                  src={item["poster-image"]}
                  alt="Sunset in the mountains"
                />
                <div class="py-2 ">
                  <div class="text-white">{item.name}</div>
                </div>
              </div>
            );
          })}
          {/* </InfiniteScroll> */}
        </div>
      </div>
    </>
  );
};

export default Listing;
