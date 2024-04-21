import React from 'react';

const ScheduledActivities = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between py-2">
        <h1 className="py-2">Scheduled Activities (14)</h1>
        <a href="/" className="text-[12px] font-[400] text-[#111111] underline">
          View All
        </a>
      </div>

      <div className="border border-[#CBCBCB] rounded">
        <p className="text-[12px] font-[400] leading-3 text-[#676666] p-3">
          <span className="text-[#000000]">Load No. I-I-AAA-1325</span> will
          start added by
          <span className="text-[#1A3875]">Aman (Driver)</span>
        </p>

        <hr className="border" />

        <p className="text-[12px] font-[400] leading-3 text-[#676666] p-3">
          <span className="text-[#1A3875]">Aman</span> (Driver){' '}
          <span className="text-[#000000]">Picked Up</span> goods at{' '}
          <span className="text-[#000000]">Location_Name</span> for{' '}
          <span className="text-[#000000]">Load No. I-I-AAA-1325</span>
        </p>

        <hr className="border" />

        <p className="text-[12px] font-[400] leading-3 text-[#676666] p-3">
          <span className="text-[#000000]">Load No. I-I-AAA-1325</span> will
          start added by
          <span className="text-[#1A3875]">Gurpreet Singh</span>
        </p>

        <hr className="border" />

        <p className="text-[12px] font-[400] leading-3 text-[#676666] p-3">
          <span className="text-[#000000]">Load No. I-I-AAA-1325</span> will
          start added by
          <span className="text-[#1A3875]">Gurpreet Singh</span>
        </p>
      </div>
    </div>
  );
};

export default ScheduledActivities;
