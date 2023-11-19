import React from "react";

function Card(props) {
  return (
    <>
      <div className="bg-blue-500 rounded-xl shadow-md opacity-80 card p-6 sm:p-14 m-auto">
        <h1 className="sm:text-5xl font-extrabold text-3xl">{props.title}</h1>
        <p className="my-2 sm:my-4 text-slate-200 text-md sm:text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas omnis
          corporis fugiat, quos repellat assumenda consequuntur consequatur
          aliquid illo incidunt eius molestias doloremque? Consequatur dolorum,
          veritatis consectetur quidem optio beatae!
        </p>
      </div>
    </>
  );
}

export default Card;
