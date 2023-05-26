import React from 'react'

const Weather = ({ data }) => {
  return (
    <div className='flex justify-center w-screen mt-8'>
    <div className="max-w-[500px] rounded bg-cyan-600/40 text-gray-900 dark:text-gray-300 m-2 py-1 px-4">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-medium sm:text-2xl text-xl tracking-wide">{data.city}</p>
          <p className="font-bold sm:text-lg text-base tracking-wider">{data.weather[0].description.toUpperCase()}</p>
        </div>
        <img
          alt="weather"
          className="sm:w-[120px] w-[80px]"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className="flex justify-between items-center">
        <p className="font-extrabold text-4xl sm:text-6xl">{Math.round(data.main.temp)}°C</p>
        <div className="w-full sm:pl-20 pl-6 pb-4">
          <div>
            <span className="font-bold sm:text-lg text-sm">Details</span>
          </div>
          <div className='flex justify-between'>
            <span className="font-semibold sm:text-base  text-sm">Feels like</span>
            <span className="font-semibold sm:text-base  text-sm text-left">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className='flex justify-between'>
            <span className="font-semibold sm:text-base  text-sm">Wind</span>
            <span className="font-semibold sm:text-base  text-sm text-left">{data.wind.speed} m/s</span>
          </div>
          <div className='flex justify-between'>
            <span className="font-semibold sm:text-base  text-sm ">Humidity</span>
            <span className="font-semibold sm:text-base  text-sm text-left">{data.main.humidity}%</span>
          </div>
          <div className='flex justify-between'>
            <span className="font-semibold sm:text-base  text-sm pr-2 ">Pressure</span>
            <span className="font-semibold sm:text-base  text-sm text-left">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Weather