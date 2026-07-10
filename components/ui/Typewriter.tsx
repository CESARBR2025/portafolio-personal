"use client";

import { useState, useEffect, useRef } from "react";

export default function Typewriter({
  words,
  className = "",
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseTime = 2000,
}: {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}) {
  const [text, setText] = useState("");
  const wordIndexRef = useRef(0);
  const isDeletingRef = useRef(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const tick = () => {
      const currentWord = words[wordIndexRef.current];
      const deleting = isDeletingRef.current;

      if (!deleting && text.length === currentWord.length) {
        timeout = setTimeout(() => {
          isDeletingRef.current = true;
          tick();
        }, pauseTime);
        return;
      }

      if (deleting && text.length === 0) {
        isDeletingRef.current = false;
        wordIndexRef.current = (wordIndexRef.current + 1) % words.length;
        timeout = setTimeout(tick, typingSpeed);
        return;
      }

      timeout = setTimeout(() => {
        setText(
          deleting
            ? currentWord.slice(0, text.length - 1)
            : currentWord.slice(0, text.length + 1)
        );
      }, deleting ? deletingSpeed : typingSpeed);
    };

    timeout = setTimeout(tick, typingSpeed);
    return () => clearTimeout(timeout);
  }, [text, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={className}>
      {text}
      <span className="animate-blink text-primary ml-0.5">|</span>
    </span>
  );
}
