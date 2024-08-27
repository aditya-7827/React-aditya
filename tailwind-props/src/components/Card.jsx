import React from 'react'
import Icon from "./Icon.png"

function Card({username}) {
  return (
    <div className="relative h-[400px] w-[300px]">
      <img
        src={Icon}
        alt="UserProfile"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold ">{username || "Aditya"}</h1>
        <p className="mt-2 text-sm text-gray-300">
          I am a UI developer.
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          View Profile &rarr;
        </button>
      </div>
    </div>
  )
}

export default Card;