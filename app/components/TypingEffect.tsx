import { useEffect, useState } from "react";

type TypingEffectProps = {
    text: string;
    speed?: number;
    classname?: string;
  };
  
  export const TypingEffect: React.FC<TypingEffectProps> = ({ classname, speed, text   }) => {
    const [displayText, setDisplayText] = useState<string>("");
    const [index, setIndex] = useState<number>(0);
    const [startTyping, setStartTyping] = useState<boolean>(false);
  
    useEffect(() => {
      const startTimer = setTimeout(() => {
        setStartTyping(true);
      }, 2000);
  
      return () => clearTimeout(startTimer);
    }, []);
  
    useEffect(() => {
      if (startTyping && index < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev + text[index]);
          setIndex(index + 1);
        }, speed);
        return () => clearTimeout(timeout);
      }
    }, [index, text, speed, startTyping]);
  
    return <p className={classname}>{displayText}<span className="cursor">|</span></p>;
  };