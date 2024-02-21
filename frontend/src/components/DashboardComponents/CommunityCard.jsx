import React from 'react';

function CommunityCard({ community }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{community.name}</div>
        <p className="text-gray-700 text-base">{community.description}</p>
      </div>
    </div>
  );
}

export default CommunityCard;
