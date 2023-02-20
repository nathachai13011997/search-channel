import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { lists } from "../../data/channel";
import "./Sidebar.sass";

// const list = [
//   { id: 1, title: "Tech" },
//   { id: 2, title: "Bootstrap Icons" },
//   { id: 3, title: "BoxIcons" },
//   { id: 4, title: "BoxIcons" },
// ];

const Sidebar = () => {
  const { contactId } = useParams();
  const navigate = useNavigate();
  const [action, setAction] = useState(false);

  const handleInputSearch = (e) => {
    e?.target?.value
      ? navigate(`content/search/${e?.target?.value}`)
      : navigate(`content/search`);
    setAction(false);
  };

  const handleChangInputSearch = (e) => {
    const path = e.target.value
      ? `content/search/${e.target.value}`
      : `content/search`;
    navigate(path);
    setAction(false);
  };

  const fnChangeAction = () => {
    setAction(!action);
  };

  const dataLists = lists?.sort((a, b) =>
    a?.title?.toLowerCase() > b?.title?.toLowerCase() ? 1 : -1
  );

  // dataLists?.push({
  //   id: "cc",
  //   title: "คำแนะนำ"
  // })

  // console.log("dataLists", dataLists)

  return (
    <div>
      <div className="sidebar pt3">
        <div className="brand">
          <div className="brand-navmenu">
            <a></a>
            <button
              className={`menu ${action && "action"}`}
              onClick={fnChangeAction}
            >
              <div>Menu</div>
            </button>
          </div>
        </div>
        <div className="search p2">
          <input
            className="px2 py1"
            placeholder="🔍 Search Channel"
            onClick={handleInputSearch}
            onChange={handleChangInputSearch}
          />
        </div>
        <ul className={`sidebar-links ${action && "action"}`}>
          {dataLists.map((value, index) => (
              <li key={index}>
                <Link
                  onClick={fnChangeAction}
                  className={`rounded px2 py1 ${
                    contactId?.toString() === value?.id.toString() && "active"
                  }`}
                  to={`content/${value?.id}`}
                >
                  {value?.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
