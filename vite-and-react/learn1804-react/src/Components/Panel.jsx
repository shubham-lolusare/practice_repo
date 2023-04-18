import { useEffect, useRef, useState } from "react";

export default function Panel({ isActive, heading, children, show, ind }) {
  return (
    <div>
      <div className="flex justify-between p-4 items-center">
        <div className="text-2xl font-semibold">{heading}</div>
        <div className="text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="36"
            viewBox="0 96 960 960"
            width="36"
            className={
              isActive
                ? "fill-sky-400 transition-all cursor-pointer rotate-180"
                : "fill-sky-400 transition-all cursor-pointer"
            }
            onClick={() => {
              show(ind);
            }}
          >
            <path d="M480 712 240 472l43-43 197 197 197-197 43 43-240 240Z" />
          </svg>
        </div>
      </div>
      {isActive && <div className="p-4 pt-0 text-justify">{children}</div>}
    </div>
  );
}
