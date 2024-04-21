import React from 'react';

const TransactionCard = () => {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="border border-[#CBCBCB] rounded p-2 flex-grow w-1/2">
        <p className="text-[#676666] text-[12px] leading-3 font-[500]">
          Income
        </p>
        <p className="text-[16px] text-[#148714] my-1">100000 CAD</p>
        <p className="text-[#676666] text-[12px] leading-3 font-[500]">
          2 payment received
        </p>
      </div>

      <div className="border border-[#CBCBCB] rounded p-2 flex-grow w-1/2">
        <p className="text-[#676666] text-[12px] leading-3 font-[500]">
          Expence
        </p>
        <p className="text-[16px] text-[#D04141] my-1">100000 CAD</p>
        <p className="text-[#676666] text-[12px] leading-3 font-[500]">
          5 payment paid
        </p>
      </div>
    </div>
  );
};

export default TransactionCard;
