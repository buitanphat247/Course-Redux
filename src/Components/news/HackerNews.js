import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getNews, otherAction, setQuery } from "../../sagas/news/newsSlice";
import debounce from "lodash/debounce";
import { handleFetchNews } from "../../redux-thunk/handler";
import { setQuery } from "../../redux-thunk/newsSlice";

const HackerNews = () => {
  const { data, loading, query, errorMessage } = useSelector(
    (state) => state.news
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleFetchNews(query)); // khi dispatch thì nó sẽ vô watcher saga
  }, [dispatch, query]);

  // useEffect(() => {
  //   dispatch(getNews(query)); // khi dispatch thì nó sẽ vô watcher saga
  // }, [dispatch, query]);

  const handleQuery = debounce((e) => {
    dispatch(setQuery(e.target.value));
  }, 500);

  const handlClick = () => {
    // dispatch(otherAction(true));
  };
  return (
    <div className="bg-white mx-auto mt-5 mb-5 p-5 rounded-lg shadow-md w-2/4">
      <h1 onClick={handlClick}>seloading</h1>
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="border border-gray-200 p-5 block w-full rounded-md transition-all focus:border-blue-400"
          placeholder="Typing your keyword..."
          onChange={handleQuery}
        />
      </div>
      {loading && (
        <div className="loading w-8 h-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin mx-auto my-10"></div>
      )}
      {!loading && errorMessage && (
        <p className="text-red-400 my-5">{errorMessage}</p>
      )}
      <div className="flex flex-wrap gap-5">
        {!loading &&
          data.length > 0 &&
          data.map((item, index) => {
            if (!item.title || item.title.length <= 0) return null;
            return (
              <h3 key={item.title} className="p-3 bg-gray-100 rounded-md">
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNews;
