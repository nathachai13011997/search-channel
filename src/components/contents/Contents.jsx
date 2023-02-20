import React, { useRef, useState } from "react";
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
  general,
} from "../../data/channel";
import "./Contents.sass";
import { BsYoutube } from "react-icons/bs";

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
        gaming,
        story,
        general
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
  }else if (contactId?.toString() === "ge") {
    return general;
  }
  return [];
};

const test = [];

const Contents = () => {
  const { contactId, name } = useParams();
  console.log('name: ', name);
  console.log('contactId: ', contactId);
  const dataInput = useRef(null);
  // const [dataAdvice, setDataAdvice] = useState([])
  const dataLists = showContent(contactId, name).sort((a, b) =>
    a?.name.toLowerCase() > b?.name.toLowerCase() ? 1 : -1
  );

  const handleSubmit = (e) => {
    const data = dataInput?.current?.value;
    console.log("data: ", data);
    test.push(data);
  };

  return (
    <main className="container">
      <div className="p3">
        <h1 className="main">{showTitle(contactId) || "🔍 Search"}</h1>
        {contactId === "cc" && (
          <>
            <p className="main">
              อยากให้ Search Channel เพิ่มหรอปรับแก้ไขอะไร
              หรอจะแนะนำช่องยูทูปไหนที่หน้าสนใจ พิมมาได้เลยนะครับ
            </p>
            <div >
              <textarea
                cols="50"
                rows="4"
                className="px2 py1"
                placeholder="คำแนะนำ"
                ref={dataInput}
              />
            </div>
            <button style={{ padding: "5px" }} onClick={handleSubmit}>submit</button>
            {test.map((v) => (
              <p>{v}</p>
            ))}
          </>
        )}
        {(contactId === "search" || name) && (
          <h2 style={{ marginRight: ".5rem" }}>
            {name?.length >= 3
              ? `Results for: ${name}`
              : "Please enter at least 3 characters to search..."}
          </h2>
        )}
        {dataLists.length > 0 && (
          <div style={{ display: "flex", alignItems: "center" }}>
            <h2 style={{ marginRight: ".5rem" }}>Channel YouTube</h2>
            <BsYoutube
              style={{
                fontSize: "2.5rem",
                color: "#FF0000",
                marginBottom: ".3rem",
              }}
            />
          </div>
        )}
        <div className="contents">
          {dataLists?.map((e, i) => (
            <a className="item" href={`${e.url}`} target={"_blank"} key={i}>
              {/* <div className="content h2"> */}
              <img
                style={{ width: "70px", height: "70px", borderRadius: "50%" }}
                src={`${e.img}`}
              />
              {/* </div> */}
              <div className="name">{e.name}</div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Contents;
