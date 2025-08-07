import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import WorkoutSession from "./components/WorkoutSession";
import Goals from "./components/Goals";
import Profile from "./components/Profile";
import Calendar from "./components/Calendar";
import Settings from "./components/Settings";
import Teams from "./components/Teams";
import Support from "./components/Support";
import Devices from "./components/Devices";


export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  function renderContent() {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "workout":
        return <WorkoutSession />;
      case "goals":
        return <Goals />;
      case "calendar":
        return <Calendar />;
      case "teams":
        return <Teams />;
      case "devices":
        return <Devices />;
      case "profile":
        return <Profile />;
      case "settings":
        return <Settings />;
      case "support":
        return <Support />;
      default:
        return <Dashboard />;
    }
  }

  return (
    <div className="flex h-screen bg-gray-100 text-gray-900">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 overflow-y-auto p-6">
        {renderContent()}
      </main>
    </div>
  );
}
