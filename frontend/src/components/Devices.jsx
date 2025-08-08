import React from "react";
import { Watch, HeartPulse, Smartphone } from "lucide-react";

/**
 * Lists connected devices and their connection status.
 */
export default function Devices() {
  const devices = [
    { name: "Smartwatch", status: "Connected", icon: Watch },
    { name: "Chest Strap", status: "Disconnected", icon: HeartPulse },
    { name: "Mobile App", status: "Connected", icon: Smartphone },
  ];

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow p-6 space-y-4">
      <h2 className="text-2xl font-bold">Connected Devices</h2>
      <ul className="space-y-3">
        {devices.map((dev) => {
          const Icon = dev.icon;
          return (
            <li key={dev.name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-purple-500" />
                <span>{dev.name}</span>
              </div>
              <span
                className={
                  dev.status === "Connected"
                    ? "text-green-600"
                    : "text-red-500"
                }
              >
                {dev.status}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
