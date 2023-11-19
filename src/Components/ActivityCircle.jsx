import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function ActivityCircle(props) {
  return (
    <>
        <div className="grid bg-red-400 rounded-full w-32 h-32 place-content-center text-cente circle" id="circle">
          <FontAwesomeIcon
            className="text-6xl text-center circle-icon pl-14" id="circle-icon"
            icon={props.icons}
          />
          <div className="">Lorem, ipsum dolor.</div>
        </div>
    </>
  );
}

export default ActivityCircle;
