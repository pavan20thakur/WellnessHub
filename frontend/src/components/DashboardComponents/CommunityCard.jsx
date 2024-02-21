import React from 'react';

function CommunityCard({ community, handleCommunityClick }) {
  return (
    <div className="bg-white border rounded-lg overflow-hidden cursor-pointer hover:shadow-2xl  hover:shadow-blue-gray-500/40"
      onClick={() => { 
        handleCommunityClick(community._id)
      }}
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{community.name}</div>
        <p className="text-gray-700 text-base">{community.description}</p>
      </div>
    </div>
  );
}

export default CommunityCard;
