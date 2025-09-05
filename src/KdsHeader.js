import React from "react";
import "./kds-header.css";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import { TfiReload } from "react-icons/tfi";
import { IoReloadCircleSharp, IoReloadOutline } from "react-icons/io5";

const data = [
  { key: "all", label: "All", count: 13, tone: "mint" },
  { key: "dinein", label: "Dine-In", count: 5, tone: "blue" },
  { key: "homedelivery", label: "Home Delivery", count: 7, tone: "orange" },
  { key: "foodpanda", label: "Food Panda", count: 2, tone: "pink" },
];

const data2 = [
  { key: "all2", label: "All", count: 67, tone: "mint" },
  { key: "bar", label: "BAR", count: 7, tone: "green" },
  { key: "bbq", label: "BBQ", count: 24, tone: "green" },
  { key: "chi", label: "CHI", count: 7, tone: "green" },
  { key: "csf", label: "CSF", count: 14, tone: "green" },
  // { key: "k&h", label: "K&H", count: 4, tone: "green" },
  // { key: "tan", label: "TAN", count: 11, tone: "green" },
  // { key: "all2", label: "All", count: 67, tone: "mint" },
  // { key: "bar", label: "BAR", count: 7, tone: "green" },
  // { key: "bbq", label: "BBQ", count: 24, tone: "green" },
  // { key: "chi", label: "CHI", count: 7, tone: "green" },
  // { key: "csf", label: "CSF", count: 14, tone: "green" },
  // { key: "k&h", label: "K&H", count: 4, tone: "green" },
  // { key: "tan", label: "TAN", count: 11, tone: "green" },
];

export default function KDSHeader() {
  return (
    <div className="kds-header">
      <div className="kds-toolbar">


        <div className="kds-left">
          <div className="kds-pill-row">
            {data.map((item) => (
              <button
                key={item.key}
                className={`kds-pill kds-pill--${item.tone} kds-pill--${item.key}  `}
              >
                <span className="kds-pill__label" title={item.label}>
                  {item.label}
                </span>
                {item.count > 0 && (
                  <span
                    className={`kds-badge kds-badge--${item.tone} kds-badge--${item.key}` }
                    aria-label={`${item.count} orders`}
                  >
                    {item.count}
                  </span>
                )}
              </button>
            ))}
          </div>
          <div className="kds-cat-scroll">
            {data2.map((item) => (
              <button
                key={item.key}
                className={`kds-pill kds-pill--cat  `}
              >
                <span className="kds-pill__label" title={item.label}>
                  {item.label}
                </span>
                {item.count > 0 && (
                  <span
                    className={`kds-badge `}
                    aria-label={`${item.count} orders`}
                  >
                    {item.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="kds-actions">
          <input
            type="text"
            className="kds-input"
            placeholder="Order for Dispatch"
          />
          <input
            type="text"
            className="kds-input"
            placeholder="Order for Ready"
          />
          <input
            type="text"
            className="kds-input"
            placeholder="Search Order"
          />
          <input
            type="text"
            className="kds-input"
            placeholder="Search Table"
          />
          <button className="kds-btn kds-btn--success kds-btn--undoprocess">Undo Process</button>
          <button className="kds-icon kds-btn--undoprocess" title="Refresh">
                       <BsFillExclamationCircleFill size={16} />
          </button>
          <button className="kds-icon kds-btn--undoprocess reload" title="Settings" >
         <IoReloadCircleSharp  size={22} />
          </button>
        </div>
      </div>
      <div className="kds-subtitle">KDS Order In Process</div>
    </div>
  );
}
