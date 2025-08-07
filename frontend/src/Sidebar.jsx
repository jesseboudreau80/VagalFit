import React from "react";
import {
  Heart,
  Activity,
  Target,
  Calendar as CalendarIcon,
  User,
  Settings as SettingsIcon,
  Bluetooth,
  Users,
  MessageCircle,
  Flame,
  Moon,
  Sun
} from "lucide-react";

export default function Sidebar({ activeTab, setActiveTab }) {
  // Read initial theme from localStorage or system preference
  React.useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (
      theme === "dark" ||
      (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Dark mode toggle handler
  const toggleDark = () => {
    const html = document.documentElement;
    const isDark = html.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };


  return (
    <nav className="w-80 bg-white shadow-xl h-screen flex flex-col justify-between border-r border-gray-100 dark:bg-gray-900 dark:border-gray-800 transition-colors">
      <div>
        {/* Brand - Clickable */}
        <button
          onClick={() => setActiveTab("dashboard")}
          className="flex items-center gap-2 mb-8 px-6 pt-6 focus:outline-none"
          style={{ cursor: "pointer" }}
          tabIndex={0}
          aria-label="Go to Dashboard"
        >
          <img
            src="/favicon.png"
            alt="VagalFit Heart"
            className="w-8 h-8"
            style={{ display: "block" }}
          />
          <span
            className="text-2xl font-semibold"
            style={{ color: "#8800cc", letterSpacing: "-0.01em" }}
          >
            VagalFit
          </span>
        </button>

        {/* Dark mode toggle */}
        <div className="flex items-center gap-2 px-6 mb-6">
          <button
  onClick={toggleDark}
  className="flex items-center gap-2 px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-sm font-medium dark:text-white transition"
  aria-label="Toggle dark mode"
  type="button"
>
  <Moon className="w-4 h-4 block dark:hidden" />    {/* Show in light mode */}
  <Sun className="w-4 h-4 hidden dark:block" />     {/* Show in dark mode */}
  <span className="block dark:hidden">Dark</span>
  <span className="hidden dark:block">Light</span>
</button>
        </div>

        {/* Main Nav */}
        <div className="space-y-2 px-4">
          {[
            { id: "dashboard", label: "Dashboard", icon: Activity },
            { id: "workout", label: "Workout Session", icon: Heart },
            { id: "goals", label: "Goals", icon: Target }
          ].map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                  activeTab === item.id
                    ? "bg-purple-100 text-purple-700 border-l-4 border-purple-600 dark:bg-purple-900 dark:text-purple-200 dark:border-purple-400"
                    : "text-gray-600 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800"
                }`}
              >
                <Icon className="h-5 w-5 mr-3" />
                {item.label}
              </button>
            );
          })}
        </div>
        {/* Fitness Calendar */}
        <div className="px-6 mt-8">
          <div className="flex items-center gap-2 text-purple-600 dark:text-purple-300 mb-1">
            <CalendarIcon className="h-5 w-5" />
            <span className="font-bold">Fitness Calendar</span>
          </div>
          <div className="text-gray-500 text-xs mb-2 ml-7 dark:text-gray-300">
            Track your daily progress and workout history
          </div>
          <div className="bg-gray-50 rounded-lg p-3 shadow text-center mt-1 dark:bg-gray-800">
            <div className="flex items-center justify-between mb-2 text-xs">
              <button className="px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                &lt;
              </button>
              <span className="font-medium">July 2025</span>
              <button className="px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                &gt;
              </button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-xs text-gray-400 dark:text-gray-300">
              <span>Su</span>
              <span>Mo</span>
              <span>Tu</span>
              <span>We</span>
              <span>Th</span>
              <span>Fr</span>
              <span>Sa</span>
              {/* Calendar day grid placeholder */}
            </div>
          </div>
        </div>
        {/* Hot Streak */}
        <div className="px-6 mt-8">
          <div className="rounded-xl bg-gradient-to-b from-orange-50 to-white dark:from-orange-900 dark:to-gray-900 p-4 flex flex-col items-center shadow border border-orange-100 dark:border-orange-800">
            <Flame className="h-6 w-6 text-orange-400 mb-1" />
            <div className="text-xs text-orange-500 font-semibold dark:text-orange-200">
              Current Streak
            </div>
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-300">
              5 <span className="text-base font-normal">days</span>
            </div>
            <div className="text-xs text-orange-400 mt-1 dark:text-orange-200">
              Keep it up!
            </div>
          </div>
        </div>
      </div>
      {/* Lower Nav */}
      <div className="pb-4 px-4">
        <div className="space-y-2">
          {[
            { id: "teams", label: "Teams", icon: Users },
            { id: "devices", label: "Devices", icon: Bluetooth },
            { id: "profile", label: "My Profile", icon: User },
            { id: "settings", label: "Settings", icon: SettingsIcon },
            { id: "support", label: "Support", icon: MessageCircle }
          ].map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                  activeTab === item.id
                    ? "bg-purple-100 text-purple-700 border-l-4 border-purple-600 dark:bg-purple-900 dark:text-purple-200 dark:border-purple-400"
                    : "text-gray-600 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800"
                }`}
              >
                <Icon className="h-5 w-5 mr-3" />
                {item.label}
              </button>
            );
          })}
        </div>
        {/* Settings helper text */}
        <div className="mt-4 px-2">
          <div className="flex items-center gap-2 text-purple-600 font-bold dark:text-purple-300">
            <SettingsIcon className="h-5 w-5" />
            Settings
          </div>
          <div className="text-gray-400 text-xs ml-7 -mt-1 dark:text-gray-200">
            Customize your fitness tracking experience
          </div>
        </div>
      </div>
    </nav>
  );
}
