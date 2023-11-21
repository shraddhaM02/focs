import React from "react";

function RepresentativeCard(props) {
  return (
    <>
      <div class="bg-transparent mx-2 border border-gray-200 rounded-lg shadow my-4">
        <div class="flex flex-col items-center pb-10 mt-8">
          <img
            class="w-24 h-24 mb-3 rounded-full shadow-lg"
            src="https://images.unsplash.com/photo-1682685797406-97f364419b4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
            alt="Bonnie image"
          />
          <h5 class="mb-1 text-xl font-medium text-gray-900">
            {props.name}
          </h5>
          <span class="text-lg text-slate-200 ml-2">
            {props.desg}
          </span>
        </div>
      </div>
    </>
  );
}

export default RepresentativeCard;
