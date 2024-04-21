import React from 'react';
import Button from '@mui/material/Button';

const HighPriorityCard = () => {
  return (
    <div className="bg-[#FFFFFF] flex flex-col gap-4 rounded-[12px] shadow py-3 px-3 w-[390px]">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <img
            src="./person.png"
            alt=""
            className="bg-[#E0EAFF] h-[32px] w-[32px]"
          />
          <div>
            <h1 className="text-[14px] font-[500] text-[#111111]">
              Driver raised Concern
            </h1>
            <p className="text-[12px] text-[#111111]">
              Load No: 12454, Bill To: RoaDo demo banglore
            </p>
          </div>
        </div>

        <span className="text-[14px] text-[#111111] font-[400]">13 Feb 24</span>
      </div>

      <p className="text-[12px] font-[400] leading-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
        praesentium?
      </p>

      <div className="flex justify-end">
        <div>
          <Button
            variant=""
            className="text-[14px] text-[#1A3875] border-b-2 border-[#1A3875]"
            color="primary"
          >
            Ignore
          </Button>
          <Button variant="contained" color="primary">
            resolve
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HighPriorityCard;
