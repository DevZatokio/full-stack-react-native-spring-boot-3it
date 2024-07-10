import {useState, useEffect} from 'react';

const useDayNightCycle = (): boolean => {
  const [isDay, setIsDay] = useState<boolean>(true);

  useEffect(() => {
    const timer = setInterval(() => {
      const horaActual: number = new Date().getHours();
      console.log(horaActual);
      setIsDay(horaActual >= 6 && horaActual < 18);
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return isDay;
};

export default useDayNightCycle;
