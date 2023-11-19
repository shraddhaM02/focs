import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function ActivityCircle(props) {
  const [isHovering, setHovering] = useState(false);

  const handleMouseOver = () => {
    setHovering(true);
  };

  const handleMouseOut = () => {
    setHovering(false);
  };

  return (
    <>
      <div
        className="grid bg-red-400 rounded-full w-32 h-32 place-content-center text-cente circle"
        id="circle"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <FontAwesomeIcon
          className="text-6xl text-center circle-icon"
          id="circle-icon"
          icon={props.icons}
        />
        {
          isHovering && (
            <div className="grid w-[120%] h-[120%] bg-red-500 justify-center ml-[100%] -mt-10">Lorem, ipsum dolor.</div>
          )
        }
      </div>
    </>
  );
}

export default ActivityCircle;
