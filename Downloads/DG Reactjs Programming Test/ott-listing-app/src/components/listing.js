import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
const Listing = () => {
  const listItems = useSelector((state) => state.listItems);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(() => {
    console.log(listItems);
    dispatch({ type: "LIST_ITEM" });
    console.log(listItems);
  });

  const fetchMoreData = () => {
    console.log(fetchMoreData);
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    // setTimeout(() => {

    // }, 1500);
  };

  const goBackToHome = () => {
    navigate("/");
  };
  return (
    <>
      <div class="relative">
        <header class="sticky top-0 w-full px-4 py-8 text-white bg-[url('/src/Slices/nav_bar.png')] ">
          <div class="grid grid-cols-2 mr-6">
            <span class="text-2xl text-white">
              <i class="fa fa-arrow-left fa-1x" onClick={goBackToHome}></i>{" "}
              {listItems[0].page.title}
            </span>
            <form method="GET">
              <div class="relative text-gray-600 focus-within:text-gray-400">
                <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button type="submit" class="p-1 focus:outline-none">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      class="w-6 h-6"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </button>
                </span>
                <input
                  type="search"
                  name="q"
                  class="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
                  placeholder="Search..."
                  autocomplete="off"
                  required
                />
              </div>
            </form>
          </div>
        </header>

        <div class="grid grid-cols-3 gap-3 m-3">
          <InfiniteScroll
            dataLength={listItems[0].page["page-size-returned"]}
            next={fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
          >
            {listItems[0].page.content.map((item) => {
              return (
                <div class="rounded-none max-w-sm  overflow-hidden shadow-lg mb-5">
                  <img
                    class="w-full"
                    src={item["poster-image"]}
                    alt="Sunset in the mountains"
                  />
                  <div class="py-2 ">
                    <div class="text-white text-xl ">{item.name}</div>
                  </div>
                </div>
              );
            })}
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
};

export default Listing;
