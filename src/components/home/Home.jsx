import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  lists,
  tech,
  movieSpoilers,
  comicMangaAnime,
  education,
  travel,
  gaming,
  story,
} from "../../data/channel";
import "./Home.sass";
import _ from "lodash";
// import { BsYoutube } from "react-icons/bs";
// import useWindowDimensions from '../../Hooks/windowDimensions.jsx'

const showTitle = (contactId) => {
  const res = lists?.find((e) => contactId?.toString() === e?.id.toString());
  return res?.title;
};

const showContent = (contactId, name) => {
  if (name?.length >= 3) {
    return comicMangaAnime
      .concat(
        movieSpoilers,
        tech,
        movieSpoilers,
        comicMangaAnime,
        education,
        travel,
        gaming
      )
      .filter((v) => v?.name?.toUpperCase().includes(name.toUpperCase()));
  }

  if (contactId?.toString() === "tcp") {
    return tech;
  } else if (contactId?.toString() === "ms") {
    return movieSpoilers;
  } else if (contactId?.toString() === "cma") {
    return comicMangaAnime;
  } else if (contactId?.toString() === "ed") {
    return education;
  } else if (contactId?.toString() === "tr") {
    return travel;
  } else if (contactId?.toString() === "ga") {
    return gaming;
  } else if (contactId?.toString() === "st") {
    return story;
  }
  return [];
};

const test = [];

const Home = () => {
  //   const { contactId, name } = useParams();
  //   const { height, width } = useWindowDimensions();
  //   console.log('width: ', width);
  // const [dataAdvice, setDataAdvice] = useState([])

  const numDisplay = () => {
    if (window.innerWidth > 1400) {
      return 10;
    } else if (window.innerWidth > 800) {
      return 4;
    } else {
      return 3;
    }
  };

  return (
    <main className="container">
      <div className="p3">
        <h1 className="main">Home</h1>
        {/* {(contactId === "search" || name) && (
          <h2 style={{ marginRight: ".5rem" }}>
            {name?.length >= 3
              ? `Results for: ${name}`
              : "Please enter at least 3 characters to search..."}
          </h2>
        )} */}
        {/* <div style={{ display: "flex", alignItems: "center" }}>
          <h2 style={{ marginRight: ".5rem" }}>Channel YouTube</h2>
          <BsYoutube
            style={{
              fontSize: "2.5rem",
              color: "#FF0000",
              marginBottom: ".3rem",
            }}
          />
        </div> */}
        {lists.map((v, n) => (
          <div key={n}>
            <h2  style={{ marginRight: ".5rem" }}>
              {v?.title}
            </h2>
            <div className="contents">
              {_.sampleSize(v?.data, numDisplay()).map((e, i) => (
                <a className="item" href={`${e.url}`} target={"_blank"} key={i}>
                  {/* <div className="content h2"> */}
                  <img
                    style={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "50%",
                    }}
                    src={`${e.img}`}
                  />
                  {/* </div> */}
                  <div className="name">{e.name}</div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
