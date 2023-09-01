import React, { memo, useEffect, useRef, useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();
  console.log('timer-components')
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <>
      <span>Hook Timer- {timer}</span>
      <button onClick={() => clearInterval(intervalRef.current)}>
        Clear Timer
      </button>
    </>
  );
};

export default memo(Timer) ;
