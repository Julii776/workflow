"use client";

import { useState } from "react";

export default function Notes() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState<string[]>([]);

  const handleAddNote = () => {
    if (!note.trim()) return; // prevent empty notes

    setNotes((prev) => [...prev, note]);
    setNote(""); // reset input
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-xl shadow-md bg-white">
      {/* Input + Button */}
      <h2 className="mb-2 text-center text-2xl">Notes App</h2>
      <div className="flex gap-2">
        <input
          type="text"
          className="flex-1 border rounded-lg px-3 py-2 focus:ring focus:outline-none"
          placeholder="Write a note..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />

        <button
          onClick={handleAddNote}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          disabled={note.trim() === ""}
        >
          Create
        </button>
      </div>

      {/* Notes List */}
      <div className="mt-6 space-y-2">
        {notes.map((n, idx) => (
          <div
            key={idx}
            className="p-3 bg-gray-100 rounded-lg border shadow-sm"
          >
            {n}
          </div>
        ))}
      </div>
    </div>
  );
}
