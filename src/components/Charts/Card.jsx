import React from 'react';

const Card = ({ title }) => {
  return (
    <div className="bg-[#FFFFFF] flex flex-col gap-4 rounded-[12px] shadow p-5">
      <div className="font-[400] text-[14px] leading-3">{title}</div>

      {/* Donut chart  */}
      <div className="flex justify-center">
        <div
          style={{
            background:
              'conic-gradient(#FFCB49 0deg 90deg, #7464FF 90deg 180deg, #4FD2B5 180deg)',
            width: '110px',
            height: '110px',
            borderRadius: '50%',
          }}
          className="flex justify-center items-center"
        >
          <div
            style={{
              height: '70px',
              width: '70px',
              borderRadius: '50%',
              background: '#FFFFFF',
            }}
            className="flex flex-col justify-center items-center"
          >
            <p className="font-[400] text-[#676666] leading-3 text-[12px]">
              Total
            </p>
            <p className="text-[#000000] text-[12px] leading-3 font-[500]">
              123456
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="bg-gradient-to-r from-[#FFFFFF] to-[#FFCB49] rounded w-[172px] flex justify-between p-3">
          <span className="font-[400] text-[12px] leading-3">Upcoming</span>
          <span className="font-[400] text-[12px] leading-3">50</span>
        </div>

        <div className="bg-gradient-to-r from-[#FFFFFF] to-[#7464FF] rounded w-[172px] flex justify-between p-3">
          <span className="font-[400] text-[12px] leading-3">Ongoing</span>
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
