import React from "react";

const Offline = () => {
  return (
    <div className="app flex justify-between flex-col h-full">
      <h3 className="flex flex-col items-center justify-center font-serif h-screen bg-gray-100 text-2xl font-bold text-red-500 mb-4">
        {" "}
        it appears that the user is currently offline
      </h3>
    </div>
  );
};

export default Offline;
