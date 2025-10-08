// context.tsx
"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface PlaygroundContextType {
  temperature: number[];
  setTemperature: (value: number[]) => void;
}

const PlaygroundContext = createContext<PlaygroundContextType | null>(null);

export const usePlaygroundContext = () => {
  const context = useContext(PlaygroundContext);
  if (!context) {
    throw new Error(
      "usePlaygroundContext must be used within PlaygroundProvider"
    );
  }
  return context;
};

export const PlaygroundProvider = ({ children }: { children: ReactNode }) => {
  const [temperature, setTemperature] = useState([0.6]);

  return (
    <PlaygroundContext.Provider value={{ temperature, setTemperature }}>
      {children}
    </PlaygroundContext.Provider>
  );
};
