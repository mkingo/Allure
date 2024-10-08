import { useStorage } from '@plasmohq/storage/hook';
import React, { useState, useEffect } from 'react';

const Timer = ({formattedTime}) => {
//   const [timeOn, setTimeOn] = useStorage("timeOn", 0);

//   useEffect(() => {
//     // Assuming you have the timer value from storage in minutes
//     const storedTime =  timeOn || 0;
//     setTimeOn(storedTime);

//     // Update timer every second
//     const interval = setInterval(() => {
//       if (timeOn > 0) {
//         setTimeOn((prevTimer) => prevTimer - 1);
//       }
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [timeOn]);

//   // Format the timer value to display in MM:SS format
//   const formattedTime = new Date(timeOn * 60000).toISOString().substr(14, 5);

  return (
    <div className="fixed border-r-4 flex items-center justify-center">
      {/* Icon */}
      {/* <div className="mr-2">YourIconComponentHere</div> */}

      {/* Timer */}
      <div className="flex items-center bg-purple-500">
        <div className="mr-2 text-2xl">{formattedTime}</div>
        {/* <div className="text-sm text-gray-500">left</div> */}
      </div>
    </div>
  );
};

export default Timer;
