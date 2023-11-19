import React from "react";
import Card from "./Card";
import ActivityCircle from "./ActivityCircle";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <>
      <div className="bg-blue-800 card-parent py-10">
        <Card title={"MISSION"} />
        <div className="sm:grid sm:grid-cols-4 space-y-5 sm:space-y-0 bg-blue-500 rounded-xl shadow-md opacity-80 card p-6 sm:p-14 m-auto">
          <ActivityCircle icons={faGamepad} />
          <div></div>
          <ActivityCircle icons={faGamepad} />
          <div></div>
          <div></div>
          <ActivityCircle icons={faGamepad} />
          <div></div>
          <ActivityCircle icons={faGamepad} />
        </div>
      </div>
    </>
  );
}

export default Home;
