import { useEffect, useState } from "react";

const functions = {

 TypingEffect( text ) {

  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(text.substring(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === text.length) {
        clearInterval(intervalId);
      }
    }, 100);
    
    return () => clearInterval(intervalId);
  }, [text]);
  
  return displayedText;
},
getCountdownTime(gameDate) {
  const difference = new Date(gameDate) - new Date();
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / 1000 / 60) % 60);
  const seconds = Math.floor((difference / 1000) % 60);
  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

}

export default functions