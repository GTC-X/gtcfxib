"use client";
import React, { useState, useEffect } from 'react';
import FlipCountdown from '@rumess/react-flip-countdown';

const CountDown = ({ date }) => {

    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
    function calculateTimeRemaining() {
        const now = new Date().getTime();
        const difference = new Date(date).getTime() - now;

        if (difference <= 0) {
            return {
                days: '00',
                hours: '00',
                minutes: '00',
                seconds: '00',
            };
        }
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        return {
            days: days < 10 ? `0${days}` : days.toString(),
            hours: hours < 10 ? `0${hours}` : hours.toString(),
            minutes: minutes < 10 ? `0${minutes}` : minutes.toString(),
            seconds: seconds < 10 ? `0${seconds}` : seconds.toString(),
        };
    }

    useEffect(() => {
        const interval = setInterval(() => {
          setTimeRemaining(calculateTimeRemaining());
        }, 1000);
    
        return () => clearInterval(interval);
      }, [date]);

    return (
        <>
       <section> 
        <div className="flex justify-center items-center">
      <div className='px-16 py-16 flip-container'>
        <p className='text-5xl text-primary text-center font-[600] flip-top' id="days">{timeRemaining.days}</p>
        <p className='text-center flip-bottom'>Days</p>
      </div>
      <div className='px-16 py-16 flip-container'>
        <p className='text-5xl text-primary text-center font-[600] flip-top' id="hours">{timeRemaining.hours}</p>
        <p className='text-center flip-bottom'>Hours</p>
      </div>
      <div className='px-16 py-16 flip-container'>
        <p  className='text-5xl text-primary text-center font-[600] flip-top'id="minutes">{timeRemaining.minutes}</p>
        <p className='text-center flip-bottom'>Minutes</p>
      </div>
      <div className='px-16 py-16 flip-container'>
        <p className='text-5xl text-primary text-center font-[600] flip-top' id="seconds">{timeRemaining.seconds}</p>
        <p className='text-center flip-bottom'>Seconds</p>
      </div>
    </div>
    </section>
    <h1 className='text-center text-primary font-[600] text-6xl py-8'>Event Starts in:</h1>
    <section>
        <FlipCountdown
        endAt={'2024-12-12 01:26:58'}
        size='medium'
        theme='dark' 
        titlePosition='bottom'
        hideYear={true}
        hideMonth={true}
        dayTitle='Days'
        hourTitle='Hours'
        minuteTitle='Minutes'
        secondTitle='Seconds'
        endAtZero
        />
    </section>
    </>
    )
}

export default CountDown