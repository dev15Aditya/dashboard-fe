import React from 'react';
import Button from '@mui/material/Button';

const menuData = {
  menu: ['./menu.png', 'menu'],
  add: ['./add.png', 'add'],
  imp: ['./imp.png', 'imp'],
  task: ['./task.png', 'task'],
  import: ['./import.png', 'import'],
  transport: ['./transport.png', 'transport'],
  parcelTracking: ['./parcel-tracking.png', 'parcelTracking'],
  bc: ['./bc.png', 'bc'],
  wallet: ['./wallet.png', 'wallet'],
  dynamicFeed: ['./dynamic-feed.png', 'dynamicFeed'],
  setting: ['./setting.png', 'setting'],
};

const Sidebar = () => {
  return (
    <div className="w-[60px] py-5">
      <div className="flex justify-center my-5">
        <img src="./Logo.png" alt="logo" />
      </div>

      <ul>
        {Object.entries(menuData).map(([key, value]) => (
          <li key={key} className="mt-4">
            <Button variant="" color="primary">
              <img src={value[0]} alt={value[1]} />
            </Button>
          </li>
        ))}
      </ul>

      {/* <ul>
        <li>
          <Button variant="" color="primary">
            <img src="./menu.png" alt="" />
          </Button>
        </li>
        <li>
          <Button variant="" color="primary">
            <img src="./add.png" alt="" />
          </Button>
        </li>
        <li>
          <Button variant="" color="primary">
            <img src="./imp.png" alt="" />
          </Button>
        </li>
        <li>
          <Button variant="" color="primary">
            <img src="./task.png" alt="" />
          </Button>
        </li>
        <li>
          <Button variant="" color="primary">
            <img src="./import.png" alt="" />
          </Button>
        </li>
        <li>
          <Button variant="" color="primary">
            <img src="./transport.png" alt="" />
          </Button>
        </li>
        <li>
          <Button variant="" color="primary">
            <img src="./parcel-tracking.png" alt="" />
          </Button>
        </li>
        <li>
          <Button variant="" color="primary">
            <img src="./bc.png" alt="" />
          </Button>
        </li>
        <li>
          <Button variant="" color="primary">
            <img src="./wallet.png" alt="" />
          </Button>
        </li>
        <li>
          <Button variant="" color="primary">
            <img src="./dynamic-feed.png" alt="" />
          </Button>
        </li>
        <li>
          <Button variant="" color="primary">
            <img src="./setting.png" alt="" />
          </Button>
        </li>
      </ul> */}
    </div>
  );
};

export default Sidebar;
