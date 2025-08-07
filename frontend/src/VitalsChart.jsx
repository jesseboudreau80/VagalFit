import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: '7/15', heartRate: 72 },
  { date: '7/16', heartRate: 78 },
  { date: '7/17', heartRate: 80 },
  { date: '7/18', heartRate: 76 },
  { date: '7/19', heartRate: 82 },
];

export default function VitalsChart() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Heart Rate Over Time</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis unit=" bpm" />
          <Tooltip />
          <Line type="monotone" dataKey="heartRate" stroke="#ef4444" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
