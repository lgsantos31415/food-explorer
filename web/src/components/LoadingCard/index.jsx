import { Container } from "./styles";
import { useState, useEffect } from "react";

export default function LoadingCard({ times }) {
  const [time, setTime] = useState(false);

  useEffect(() => {
    const delay = 150 * times;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setTime((prevTime) => !prevTime);
      }, 1000);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [times]);

  return <Container $time={time}></Container>;
}
