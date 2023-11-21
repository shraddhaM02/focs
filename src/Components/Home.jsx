import React from "react";
import Card from "./Card";
import ActivityCircle from "./ActivityCircle";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import RepresentativeCard from "./RepresentativeCard";

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
        <div className="my-6 sm:my-4 p-6 bg-blue-500 rounded-xl shadow-md opacity-80 m-auto repcard sm:grid sm:grid-cols-4 grid grid-cols-2">
            <RepresentativeCard name={"Nagaraj G N"} desg={"Forum Representative"} />
            <RepresentativeCard name={"Deepu"} desg={"Forum Representative"}/>
            <RepresentativeCard name={"Athiya"} desg={"Forum Representative"}/>
            <RepresentativeCard name={"Deeksha H M"} desg={"Ex-Forum Representative"}/>
            <RepresentativeCard name={"Supreet"} desg={"Ex-Forum Representative"}/>
        </div>
      </div>
    </>
  );
}

export default Home;
