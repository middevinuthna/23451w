// src/App.js
import React, { useState, useEffect, useRef } from 'react';

const clientID = "t-FQWYk2PUt13LidWIblzu7SNd9HVOQsK3QA7Lg1Mg4";
const utm = "?utm_source=scrimba_degree&utm_medium=referral";

const loadData = (options) => {
  fetch(options.url)
    .then(response => response.json())
    .then(data => {
      if (options.onSuccess) options.onSuccess(data);
    });
};

const App = (props) => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("Coffee");
  const queryInput = useRef(null);
  const numberOfPhotos = 20;
  const url = `https://api.unsplash.com/photos/random/?count=${numberOfPhotos}&client_id=${clientID}`;

  useEffect(() => {
    const photosUrl = query ? `${url}&query=${query}` : url;

    loadData({
      url: photosUrl,
      onSuccess: res => {
        setPhotos(res);
      }
    });
  }, [query, url]);

  return (
    <div className="box">
      <h2>{props.emoji}</h2>
      <h1>{props.name}'s website</h1>
      <input
        type="text"
        ref={queryInput}
        placeholder="Search for photos..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="grid">
        {photos.map(photo => (
          <div key={photo.id} className="item">
            <img alt="red" className="img" src={photo.urls.regular} />
            <div className="caption">
              <span className="credits">Photo by 
                <a href={photo.user.links.html + utm}> {photo.user.name} </a>
                <span> on </span> 
                <a href={"https://unsplash.com" + utm}>Unsplash</a>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;