import React from "react";
import "./DetailPage.css";
import { useSelector, useDispatch } from "react-redux";

function DetailPage({ history }) {
  const likeSelector = useSelector(state => state.like);
  const bookmarkSelector = useSelector(state => state.bookmark);
  const dispatch = useDispatch();

  return (
    <div className="detail-page">
      <b>{history.location.state.detail.title.toUpperCase()}</b>
      <p>{history.location.state.detail.description}</p>
      <button
        className={likeSelector[history.location.state.index] ? "dislike" : ""}
        onClick={() =>
          dispatch({ type: "LIKE", payload: { [history.location.state.index]: !likeSelector[history.location.state.index] } })
        }
      >
        {likeSelector[history.location.state.index] ? "Dislike" : "Like"}
      </button>
      <button
        className={bookmarkSelector[history.location.state.index] ? "bookmark" : ""}
        onClick={() =>
          dispatch({ type: "BOOKMARK", payload: { [history.location.state.index]: !bookmarkSelector[history.location.state.index] } })
        }
      >
        Bookmark
      </button>
    </div>
  );
}

export default DetailPage;
