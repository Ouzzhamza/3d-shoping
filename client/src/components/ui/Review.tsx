import React from 'react'

function Review() {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Review:</span>
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-lg">
              ★
            </span>
          ))}
        </div>
        <span className="text-sm text-gray-600">4.5 (60)</span>
      </div>
    </div>
  );
}

export default Review