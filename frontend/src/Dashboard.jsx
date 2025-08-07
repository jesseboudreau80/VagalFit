import React from "react";
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, LabelList,
} from "recharts";
import { Flame, TrendingUp } from "lucide-react";

// ----- Donut Chart Data -----
const zoneData = [
  { name: "Zone 1", value: 30 },
  { name: "Zone 2", value: 25 },
  { name: "Zone 3", value: 20 },
  { name: "Zone 4 (VO2 Max)", value: 10 },
];
const donutColors = ["#ede9fe", "#c4b5fd", "#a78bfa", "#7c3aed"];

// ----- Today's Goals Data -----
const goals = [
  { label: "Steps Goal", value: 8432, max: 10000 },
  { label: "Active Minutes", value: 47, max: 60 },
  { label: "Calories Burned", value: 1247, max: 1500 },
];

// ----- Stat Cards Data -----
const statCards = [
  {
    label: "Fat Calories",
    value: 523,
    sub: "42% of total",
    icon: <Flame className="w-5 h-5 text-orange-400" />,
  },
  {
    label: "Carb Calories",
    value: 724,
    sub: "58% of total",
    icon: <Flame className="w-5 h-5 text-orange-400" />,
  },
  {
    label: "VO2 Max",
    value: "42.3",
    sub: <span className="text-green-500">Excellent</span>,
    icon: <TrendingUp className="w-5 h-5 text-purple-500" />,
  },
];

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-8">
      {/* Top row: Donut and Goals */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Donut Chart Card */}
        <div className="bg-white rounded-2xl shadow p-6 flex-1 flex flex-col items-center min-w-[320px]">
          <div className="text-lg font-semibold mb-2 text-gray-800">Time in Heart Rate Zones</div>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={zoneData}
                dataKey="value"
                nameKey="name"
                innerRadius={60}
                outerRadius={90}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name }) => name.split(" ")[1] || name}
              >
                {zoneData.map((entry, i) => (
                  <Cell key={`cell-${i}`} fill={donutColors[i % donutColors.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value, name) => [`${value}`, name]} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Today's Goals Card */}
        <div className="bg-white rounded-2xl shadow p-6 flex-1 flex flex-col min-w-[320px]">
          <div className="text-lg font-semibold mb-2 text-gray-800 flex items-center gap-2">
            <span className="text-purple-500"><TrendingUp className="w-5 h-5" /></span>
            Today's Goals
          </div>
          <div className="flex flex-col gap-4 mt-3">
            {goals.map(goal => (
              <div key={goal.label}>
                <div className="flex justify-between text-sm text-gray-700 mb-1">
                  <span>{goal.label}</span>
                  <span>
                    <span className="font-medium">{goal.value.toLocaleString()}</span>
                    {" / "}
                    <span className="text-gray-400">{goal.max.toLocaleString()}</span>
                  </span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full">
                  <div
                    className="h-3 rounded-full transition-all bg-gray-900"
                    style={{ width: `${Math.min((goal.value / goal.max) * 100, 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stat Cards Row */}
      <div className="flex flex-row gap-6">
        {statCards.map((card, idx) => (
          <div
            key={card.label}
            className="bg-white flex-1 rounded-2xl shadow px-6 py-4 flex flex-col items-center min-w-[180px]"
          >
            <div>{card.icon}</div>
            <div className="text-2xl font-bold">{card.value}</div>
            <div className="text-xs text-gray-400">{card.label}</div>
            <div className="text-sm mt-1">{card.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
