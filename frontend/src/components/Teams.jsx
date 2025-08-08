import React, { useState } from "react";
import { Users, Plus } from "lucide-react";

/**
 * Teams page allowing users to view existing teams and add new ones.
 */
export default function Teams() {
  const [teams, setTeams] = useState(["Cardio Champs", "Yoga Buddies"]);
  const [newTeam, setNewTeam] = useState("");

  const addTeam = () => {
    const trimmed = newTeam.trim();
    if (trimmed) {
      setTeams([...teams, trimmed]);
      setNewTeam("");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow p-6 space-y-4">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <Users className="w-6 h-6 text-purple-500" /> Teams
      </h2>
      <ul className="space-y-2">
        {teams.map((team) => (
          <li
            key={team}
            className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded"
          >
            <span>{team}</span>
          </li>
        ))}
      </ul>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="New team name"
          value={newTeam}
          onChange={(e) => setNewTeam(e.target.value)}
          className="flex-1 border border-gray-300 rounded px-2 py-1"
        />
        <button
          onClick={addTeam}
          className="bg-purple-500 text-white px-3 py-1 rounded flex items-center gap-1"
          type="button"
        >
          <Plus className="w-4 h-4" /> Add
        </button>
      </div>
    </div>
  );
}
