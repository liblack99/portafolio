import React from "react";

function Technologies({ technology }) {
  return (
    <div className="w-[auto] h-[24px] flex items-center justify-center bg-[#193756] text-[#51cbce] rounded-full mb-4">
      <p className="text-[#51cbce] p-3 font-semibold">{technology}</p>
    </div>
  );
}

export default Technologies;
