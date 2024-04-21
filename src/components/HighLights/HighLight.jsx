import React from 'react';
import TransactionCard from './TransactionCard';
import CompletedActivities from './CompletedActivities';
import ScheduledActivities from './ScheduledActivities';

const HighLight = () => {
  return (
    <div className="py-5 px-3 w-full">
      <h1 className="text-[16px] font-[500] leading-4 text-[#000000] pt-3">
        Todays Highlights (14)
      </h1>
      <p className="text-[14px] text-[#111111] font-[500] pt-1 pb-3">
        13 Feb 24
      </p>

      <TransactionCard />

      <CompletedActivities />
      <ScheduledActivities />
    </div>
  );
};

export default HighLight;
