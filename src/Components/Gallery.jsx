import React from "react";
import {Link} from "react-router-dom"
import Kaushala from "./Kaushala";

function Gallery() {
  return (
    <>
      <div className="p-10 space-y-6 sm:my-0 sm:grid sm:grid-cols-6 sm:gap-4">
        <div className="relative sm:col-span-3">
          <Link to="/kaushala">
          <img
            src="https://images.unsplash.com/photo-1700740760502-f28b1769c8d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8"
            alt=""
            className="blur-[2px]"
          />
          <h1 className="absolute top-1/3 bottom-0 left-1/3 right-0 text-3xl text-slate-200">
            Kaushala
          </h1>
          <h1 className="absolute top-1/2 bottom-0 left-1/3 right-0 text-3xl text-slate-200">
            15 Photos
          </h1>
          </Link>
        </div>
        <div className="relative sm:col-span-3">
          <img
            src="https://images.unsplash.com/photo-1700740760502-f28b1769c8d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8"
            alt=""
            className="blur-[2px]"
          />
          <h1 className="absolute top-1/3 bottom-0 left-1/3 right-0 text-3xl text-slate-200">
            Kaushala
          </h1>
          <h1 className="absolute top-1/2 bottom-0 left-1/3 right-0 text-3xl text-slate-200">
            15 Photos
          </h1>
        </div>
        <div className="relative sm:col-span-3">
          <img
            src="https://images.unsplash.com/photo-1700740760502-f28b1769c8d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8"
            alt=""
            className="blur-[2px]"
          />
          <h1 className="absolute top-1/3 bottom-0 left-1/3 right-0 text-3xl text-slate-200">
            Kaushala
          </h1>
          <h1 className="absolute top-1/2 bottom-0 left-1/3 right-0 text-3xl text-slate-200">
            15 Photos
          </h1>
        </div>
        <div className="relative sm:col-span-3">
          <img
            src="https://images.unsplash.com/photo-1700740760502-f28b1769c8d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8"
            alt=""
            className="blur-[2px]"
          />
          <h1 className="absolute top-1/3 bottom-0 left-1/3 right-0 text-3xl text-slate-200">
            Kaushala
          </h1>
          <h1 className="absolute top-1/2 bottom-0 left-1/3 right-0 text-3xl text-slate-200">
            15 Photos
          </h1>
        </div>
        <div className="relative sm:col-span-3">
          <img
            src="https://images.unsplash.com/photo-1700740760502-f28b1769c8d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8"
            alt=""
            className="blur-[2px]"
          />
          <h1 className="absolute top-1/3 bottom-0 left-1/3 right-0 text-4xl text-slate-200">
            Kaushala
          </h1>
          <h1 className="absolute top-1/2 bottom-0 left-1/3 right-0 text-3xl text-slate-200 ">
            15 Photos
          </h1>
        </div>
        <div className="relative sm:col-span-3">
          <img
            src="https://images.unsplash.com/photo-1700740760502-f28b1769c8d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8"
            alt=""
            className="blur-[2px]"
          />
          <h1 className="absolute top-1/2 bottom-0 left-1/2 right-0 text-3xl text-slate-200">
            Kaushala
          </h1>
          <h1 className="absolute top-1/2 bottom-0 left-1/3 right-0 text-3xl text-slate-200">
            15 Photos
          </h1>
        </div>
      </div>
    </>
  );
}

export default Gallery;
