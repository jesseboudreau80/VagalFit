import React, { useState } from "react";

/**
 * Settings page allowing users to toggle email notifications and dark mode.
 */
export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  const handleDarkToggle = () => {
    const html = document.documentElement;
    const newDarkMode = !darkMode;
    if (newDarkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    setDarkMode(newDarkMode);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow p-6 space-y-4">
      <h2 className="text-2xl font-bold">Settings</h2>
      <div className="flex justify-between items-center">
        <span>Email Notifications</span>
        <input
          type="checkbox"
          checked={notifications}
          onChange={() => setNotifications(!notifications)}
        />
      </div>
      <div className="flex justify-between items-center">
        <span>Dark Mode</span>
        <input type="checkbox" checked={darkMode} onChange={handleDarkToggle} />
      </div>
    </div>
  );
}
