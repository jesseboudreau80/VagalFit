import React from "react";
import { Mail, MessageCircle } from "lucide-react";

/**
 * Support page with contact options.
 */
export default function Support() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow p-6 space-y-4">
      <h2 className="text-2xl font-bold">Support</h2>
      <p className="text-gray-600">
        Need help? Contact our support team via email or chat.
      </p>
      <div className="flex flex-col gap-3">
        <a
          href="mailto:support@vagalfit.com"
          className="flex items-center gap-2 text-purple-600 underline"
        >
          <Mail className="w-4 h-4" /> support@vagalfit.com
        </a>
        <a href="#" className="flex items-center gap-2 text-purple-600 underline">
          <MessageCircle className="w-4 h-4" /> Live Chat
        </a>
      </div>
    </div>
  );
}
