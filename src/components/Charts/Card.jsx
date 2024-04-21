import React from 'react';

const Card = ({ title }) => {
  return (
    <div className="bg-[#FFFFFF] flex flex-col gap-4 rounded-[12px] shadow p-5">
      <div className="font-[400] text-[14px] leading-3">{title}</div>

      {/* Piechart  */}
      <div className="flex justify-center">
        <img src="./Ellipse.png" alt="" className="h-[110px] w-[110px]" />
      </div>

      <div className="flex flex-col gap-2">
        <div className="bg-gradient-to-r from-[#FFFFFF] to-[#FFCB49] rounded w-[172px] flex justify-between p-3">
          <span className="font-[400] text-[12px] leading-3">Upcoming</span>
          <span className="font-[400] text-[12px] leading-3">50</span>
        </div>

        <div className="bg-gradient-to-r from-[#FFFFFF] to-[#7464FF] rounded w-[172px] flex justify-between p-3">
          <span className="font-[400] text-[12px] leading-3">Oning</span>
          <span className="font-[400] text-[12px] leading-3">100</span>
        </div>

        <div className="bg-gradient-to-r from-[#FFFFFF] to-[#4FD2B5] rounded w-[172px] flex justify-between p-3">
          <span className="font-[400] text-[12px] leading-3">Completed</span>
          <span className="font-[400] text-[12px] leading-3">50</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
