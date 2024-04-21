import React from 'react';
import Card from '../Charts/Card';
import QuickActions from './QuickActions';
import HighPriorityCard from './HighPriorityCard';
import { Button } from '@mui/material';

const data = ['Orders', 'Trips', 'Revenue', 'Expences'];

const Dashboard = () => {
  return (
    <div className="bg-[#F7FAFF] p-5 w-full">
      <div className="flex justify-between my-3">
        <h1 className="font-[500] text-[24px]">Dashboard</h1>
        <div className="bg-[#FFFFFF] flex justify-between rounded-[12px] shadow gap-3 p-2">
          <img src="./search.png" alt="" />
          <div className="w-[1px] h-[16px] bg-[#CBCBCB]"></div>

          <img src="./notification.png" alt="" />
          <div className="w-[1px] h-[16px] bg-[#CBCBCB]"></div>

          <img src="./options.png" alt="" />
        </div>
      </div>
      <div className="flex justify-between flex-wrap">
        {data.map((item) => (
          <Card key={item} title={item} />
        ))}
      </div>

      <h1 className="text-[14px] font-[500] mt-5 mb-3">Quick Actions</h1>
      <QuickActions />

      <div className="flex justify-between items-center">
        <h1 className="text-[14px] font-[500] mt-5 mb-3">
          High Priority alerts (14)
        </h1>
        <Button className="h-[30px]">View All &gt;</Button>
      </div>
      <div className="flex justify-between flex-wrap gap-4">
        <HighPriorityCard />
        <HighPriorityCard />
      </div>
    </div>
  );
};

export default Dashboard;
