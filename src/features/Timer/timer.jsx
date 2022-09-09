import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);
  const [startTimer, setStartTimer] = useState(null);
  useEffect(() => {
    if (secs == 59) {
      setMins((mins) => mins + 1);
      setSecs(0);
    }
  }, [secs]);
  const startHandler = () => {
    const setTimer = setInterval(() => {
      setSecs((secs) => secs + 1);
    }, 1000);
    setStartTimer(setTimer);
  };
  const stopHandler = () => {
    clearInterval(startTimer);
    setStartTimer(null);
  };
  const resetHandler = () => {
    clearInterval(startTimer);
    setStartTimer(null);
    setSecs(0);
    setMins(0);
  };
  return (
    <>
      <span>
        {mins <= 9 && 0}
        {mins} : {secs <= 9 && 0}
        {secs}
      </span>
      <br />
      {!startTimer && <button onClick={startHandler}>Start</button>}
      <button onClick={stopHandler}>Stop</button>
      <button onClick={resetHandler}>Reset</button>
    </>
  );
};

export default Timer;
