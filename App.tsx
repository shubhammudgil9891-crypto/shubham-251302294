import React from 'react';
import { Download, FileText } from 'lucide-react';

const files = [
  { name: 'hospital_management.c', description: 'Hospital Management System' },
  { name: 'snake_ladder.c', description: 'Snake and Ladder Game' },
  { name: 'bus_reservation.c', description: 'Bus Reservation System' },
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-gray-900 border border-gray-800 rounded-xl shadow-2xl p-6">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 mb-2">
            C Programs
          </h1>
          <p className="text-gray-400 text-sm">
            Files created in project root. Click to view/download.
          </p>
        </div>

        <div className="space-y-3">
          {files.map((file) => (
            <div 
              key={file.name}
              className="flex items-center justify-between p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all group"
            >
              <div className="flex items-center space-x-3">
                <FileText className="w-5 h-5 text-blue-400" />
                <div>
                  <div className="font-mono text-sm font-medium text-white">{file.name}</div>
                  <div className="text-xs text-gray-500">{file.description}</div>
                </div>
              </div>
              <a 
                href={file.name} 
                download={file.name}
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                title="Download"
              >
                <Download className="w-5 h-5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;