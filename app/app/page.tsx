"use client";

import { useState } from "react";

export const names: string[] = [
  "Lettie",
  "Harvey",
  "Celia",
  "Mamie",
  "Barry",
  "Herbert",
  "Edna",
  "Alan",
  "Etta",
  "Polly",
  "Lola",
  "Russell",
];

const select = (array: string[]): string => {
  return array[Math.floor(Math.random() * array.length)];
};

export default function Home() {
  const [name, setName] = useState<string>("");

  return (
    <div className="bg-sky-50 flex flex-col gap-3 items-center justify-center min-h-screen p-3">
      <div className="bg-white flex flex-col gap-3 p-3 rounded-md border border-sky-300">
        <div className="flex flex-row gap-3">
          <input
            type="text"
            className="input flex-1"
            placeholder="Name here..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="btn" onClick={() => setName(select(names))}>
            Fill in
          </button>
        </div>
        <input
          type="text"
          className="input w-full"
          readOnly
          value={`Name: ${name ? name : "empty..."}`}
          onClick={() => navigator.clipboard.writeText(name.toString())}
        />
      </div>
    </div>
  );
}
