import React, { useState, useEffect } from "react";
import tiles from "./img.jpg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App({history}) {
  const [state, setState] = useState([]);
  const likeSelector = useSelector(state => state.like);
  const bookmarkSelector = useSelector(state => state.bookmark);
  const dispatch = useDispatch();

  useEffect(() => {
    const url = "data/mock.json";
    fetch(url)
      .then(response => response.json())
      .then(res => setState(res.data));
  }, []);


  const navigateTodetailPage = (item, i) => {
   history.push({
      pathname: '/detail',
      state: { detail: item , index: i}
    })
  }

  console.log(likeSelector);
  console.log(bookmarkSelector);
  return (
    <div className="App">
      {state.map((item, i) => {
        return (
            <div key={i} className="card-items">
            <img src={tiles} alt="img" />
            <div className="content-section">
              <p onClick={() => navigateTodetailPage(item, i)} >
                <b>{item.title}</b>
              </p>
              <p>{item.description}</p>
              <button className={likeSelector[i] ? "dislike" : ""}   onClick={() => dispatch({type: 'LIKE', payload: {[i]: !likeSelector[i]}})}>{likeSelector[i] ? "Dislike" : "Like" }</button>
              <button className={bookmarkSelector[i] ? 'bookmark' : ''} onClick={() => dispatch({type: 'BOOKMARK', payload: {[i]: !bookmarkSelector[i]}})}>Bookmark</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
