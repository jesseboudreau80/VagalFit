import React from "react";
import { UserCircle } from "lucide-react";

/**
 * Basic profile page showing user information and fitness stats.
 */
export default function Profile() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow p-6 space-y-4">
      <div className="flex items-center gap-3">
        <UserCircle className="w-8 h-8 text-purple-500" />
        <h2 className="text-2xl font-bold">Jesse Boudreau</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="font-medium">Age:</span> 29
        </div>
        <div>
          <span className="font-medium">Height:</span> 5&apos;10&quot;
        </div>
        <div>
          <span className="font-medium">Weight:</span> 160 lbs
        </div>
        <div>
          <span className="font-medium">VO2 Max:</span> 42.3
        </div>
      </div>
    </div>
  );
}
