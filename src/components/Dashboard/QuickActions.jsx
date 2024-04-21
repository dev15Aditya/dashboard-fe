import React from 'react';

const QuickActions = () => {
  return (
    <div className="bg-[#FFFFFF] flex justify-between flex-wrap gap-4 rounded-[12px] shadow p-5">
      <div className="flex flex-col items-center">
        <img src="./imp.png" alt="" />
        <div>Create Indents</div>
      </div>

      <div className="w-[1px] h-[45px] bg-[#CBCBCB]"></div>

      <div className="flex flex-col items-center">
        <img src="./transport.png" alt="" />
        <div>Add Vehicle</div>
      </div>

      <div className="w-[1px] h-[45px] bg-[#CBCBCB]"></div>

      <div className="flex flex-col items-center">
        <img src="./hookup.png" alt="" />
        <div>Add Trailer</div>
      </div>

      <div className="w-[1px] h-[45px] bg-[#CBCBCB]"></div>

      <div className="flex flex-col items-center">
        <img src="./person.png" alt="" />
        <div>Add Driver</div>
      </div>

      <div className="w-[1px] h-[45px] bg-[#CBCBCB]"></div>

      <div className="flex flex-col items-center">
        <img src="./transport.png" alt="" />
        <div>Add Indents</div>
      </div>
    </div>
  );
};

export default QuickActions;
