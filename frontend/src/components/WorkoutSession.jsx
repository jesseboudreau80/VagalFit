import React, { useState, useRef, useEffect } from "react";
import { HeartPulse, Play, Pause, RotateCcw } from "lucide-react";

/**
 * A basic workout session tracker with a heart-rate display,
 * elapsed time counter, and start/pause/reset controls.
 */
export default function WorkoutSession() {
  const [elapsed, setElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  // Handle the timer interval
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => setElapsed((e) => e + 1), 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  // Reset the timer and pause
  const reset = () => {
    setElapsed(0);
    setIsRunning(false);
  };

  // Convert seconds to mm:ss format
  const formatTime = (sec) =>
    `${String(Math.floor(sec / 60)).padStart(2, "0")}:${String(sec % 60).padStart(2, "0")}`;

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow p-6 flex flex-col gap-6">
      {/* Heart rate display */}
      <div className="flex items-center gap-3">
        <HeartPulse className="w-6 h-6 text-red-500" />
        <div>
          <div className="text-xs text-gray-500">Current Heart Rate</div>
          <div className="text-3xl font-bold">75 BPM</div>
        </div>
      </div>

      {/* Elapsed time */}
      <div className="text-center">
        <div className="text-sm text-gray-500">Elapsed Time</div>
        <div className="text-4xl font-mono font-bold">{formatTime(elapsed)}</div>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4">
        {!isRunning ? (
          <button
            onClick={() => setIsRunning(true)}
            className="bg-purple-500 text-white px-4 py-2 rounded-full flex items-center gap-2"
            type="button"
          >
            <Play className="w-4 h-4" /> Start
          </button>
        ) : (
          <button
            onClick={() => setIsRunning(false)}
            className="bg-yellow-400 text-white px-4 py-2 rounded-full flex items-center gap-2"
            type="button"
          >
            <Pause className="w-4 h-4" /> Pause
          </button>
        )}
        <button
          onClick={reset}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full flex items-center gap-2"
          type="button"
        >
          <RotateCcw className="w-4 h-4" /> Reset
        </button>
      </div>
    </div>
  );
}
