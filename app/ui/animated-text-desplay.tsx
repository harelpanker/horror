"use client";
import React, { useEffect, useState } from "react";
import { TextEffect } from "@/app/ui/text-effect";

const decodeHtmlEntities = (text: string): string => {
  const textArea = document.createElement("textarea");
  textArea.innerHTML = text;
  return textArea.value;
};

const AnimatedTextDisplay = ({
  text,
  step,
}: {
  text: string;
  step: number;
}) => {
  const [key, setKey] = useState(0);
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    const newLines = text
      .split("\n")
      .filter((line) => line.trim())
      .map((line) => decodeHtmlEntities(line));

    setLines(newLines);
    setVisibleLines([]);
    setKey((prev) => prev + 1);

    // Progressively show lines
    newLines.forEach((_, index) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, index]);
      }, index * 1000);
    });
  }, [text, step]);

  return (
    <div className="flex flex-col gap-y-1">
      {lines.map((line, index) => (
        <div
          key={`${key}-${index}`}
          className="opacity-0 transition-opacity duration-300"
          style={{
            opacity: visibleLines.includes(index) ? 1 : 0,
          }}
        >
          {visibleLines.includes(index) && (
            <TextEffect key={`effect-${key}-${index}`} per="char" preset="fade">
              {line}
            </TextEffect>
          )}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTextDisplay;
