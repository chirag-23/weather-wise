import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({data}) => {
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

    const today = new Date();
    // Generate the next 7 dates
    const nextSevenDates = [];
    for (let i = 0; i < 7; i++) {
        const nextDay = new Date(today);
        nextDay.setDate(today.getDate() + i + 1);
        nextSevenDates.push(nextDay);
    }
  return (
    <div className='w-screen fixed bottom-0 py-4 bg-white/20 flex items-center text-gray-900 dark:text-gray-300'>
        <Carousel fade indicators={false} touch={true} interval={null}>
            {data.list.slice(0, 7).map((item, idx) => (
                <Carousel.Item style={{width:'100vw'}} key={idx} className='sm:px-20 px-8 d-block flex justify-around ease-in-out'>
                    <div className='flex justify-around items-center'>
                        <div>
                            <p className="font-semibold text-lg sm:text-xl tracking-wider">{nextSevenDates[idx].toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' })}</p>
                            <p className="font-bold text-2xl sm:text-4xl tracking-wide">{forecastDays[idx]}</p>
                            <p className="font-semibold text-lg sm:text-xl pt-2">{item.weather[0].description.toUpperCase()}</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img src={`icons/${item.weather[0].icon}.png`} className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]" alt="weather" />
                            <span className="font-bold sm:text-3xl text-xl">{Math.round(item.main.temp_max)}°C /{Math.round(item.main.temp_min)}°C</span>
                        </div>
                        <div className="sm:flex flex-col hidden">
                            <div className="flex justify-between">
                            <span className='font-semibold sm:text-lg mr-2'>Pressure:</span>
                            <span className='font-medium sm:text-lg'>{item.main.pressure}</span>
                            </div>
                            <div className="flex justify-between">
                            <span className='font-semibold text-lg mr-2'>Humidity:</span>
                            <span className='font-medium text-lg'>{item.main.humidity}</span>
                            </div>
                            <div className="flex justify-between">
                            <span className='font-semibold text-lg mr-2'>Clouds:</span>
                            <span className='font-medium text-lg'>{item.clouds.all}%</span>
                            </div>
                            <div className="flex justify-between">
                            <span className='font-semibold text-lg mr-2'>Wind speed:</span>
                            <span className='font-medium text-lg'>{item.wind.speed} m/s</span>
                            </div>
                            <div className="flex justify-between">
                            <span className='font-semibold text-lg mr-2'>Sea level:</span>
                            <span className='font-medium text-lg'>{item.main.sea_level}m</span>
                            </div>
                            <div className="flex justify-between">
                            <span className='font-semibold text-lg mr-2'>Feels like:</span>
                            <span className='font-medium text-lg'>{item.main.feels_like}°C</span>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    </div>
  )
}

export default Forecast