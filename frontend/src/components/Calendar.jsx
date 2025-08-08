import React from "react";

/**
 * A simple monthly calendar for July 2025.
 * Highlighted days represent completed workouts.
 */
export default function Calendar() {
  const year = 2025;
  const monthIndex = 6; // July (0-indexed)
  const monthName = "July 2025";
  const daysInMonth = 31;
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const days = Array.from({ length: firstDay }, () => null).concat(
    Array.from({ length: daysInMonth }, (_, i) => i + 1)
  );
  const workouts = [2, 5, 7, 12, 18, 25]; // example workout days

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Fitness Calendar</h2>
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{monthName}</span>
        {/* navigation controls can be added here */}
      </div>
      <div className="grid grid-cols-7 text-xs text-gray-500 mb-1">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
          <div key={d} className="text-center font-medium">
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, idx) => (
          <div key={idx} className="h-8 w-8 flex items-center justify-center">
            {day ? (
              <span
                className={`h-7 w-7 flex items-center justify-center rounded-full ${
                  workouts.includes(day) ? "bg-purple-500 text-white" : ""
                }`}
              >
                {day}
              </span>
            ) : null}
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-400 mt-4">
        Highlighted days indicate completed workouts.
      </p>
    </div>
  );
}
