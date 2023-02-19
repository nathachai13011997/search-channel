import React from "react";
import { useParams } from "react-router-dom";
import { lists, tech, movieSpoilers, comic } from "../../data/channel";
import "./Contents.sass";
import { BsYoutube } from "react-icons/bs";

const showTitle = (contactId) => {
  const res = lists?.find((e) => contactId?.toString() === e?.id.toString());
  return res?.title;
};

const showContent = (contactId, name) => {
  if (name?.length >= 3) {
    return comic
      .concat(movieSpoilers, tech)
      .filter((v) => v?.name?.toUpperCase().includes(name.toUpperCase()));
  }

  if (contactId?.toString() === "tcp") {
    return tech;
  } else if (contactId?.toString() === "ms") {
    return movieSpoilers;
  } else if (contactId?.toString() === "cm") {
    return comic;
  }
  return [];
};

const Contents = () => {
  const { contactId, name } = useParams();
  const dataLists = showContent(contactId, name).sort((a, b) =>
    a?.name.toLowerCase() > b?.name.toLowerCase() ? 1 : -1
  );
  return (
    <main className="container">
      <div className="p3">
        <h1 className="main">{showTitle(contactId) || "🔍 Search"}</h1>
        {(contactId === "search" || name) && (
          <h2 style={{ marginRight: ".5rem" }}>
            {name?.length >= 3
              ? `Results for: ${name}`
              : "Please enter at least 3 characters to search..."}
          </h2>
        )}
        {
          dataLists.length > 0 && (
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
          )
        }
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
