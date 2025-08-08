import React from "react";

/**
 * Displays user goals with progress bars for steps, active minutes, and calories.
 */
export default function Goals() {
  const goals = [
    { label: "Steps", value: 8432, max: 10000 },
    { label: "Active Minutes", value: 47, max: 60 },
    { label: "Calories", value: 1247, max: 1500 },
  ];

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Your Goals</h2>
      {goals.map((g) => (
        <div key={g.label}>
          <div className="flex justify-between text-sm text-gray-700 mb-1">
            <span>{g.label}</span>
            <span>
              {g.value.toLocaleString()} / {g.max.toLocaleString()}
            </span>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full">
            <div
              className="h-3 rounded-full bg-purple-500 transition-all"
              style={{ width: `${Math.min((g.value / g.max) * 100, 100)}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
