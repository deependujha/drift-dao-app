import React from 'react'
import LeftCol from './LeftCol';
import MainCol from './MainCol';
import RightCol from './RightCol';
import Navbaar from '../layouts/Navbaar'

const Dashboard = () => {
  return (
    <div className=" shadow-lg bg-zinc-900 text-white h-screen fixed overflow-y-scroll">
      <div className="grid grid-flow-col auto-cols-auto divide-x">
        <div>
          <LeftCol />
        </div>
        <div>
          <Navbaar />
          <hr></hr>
          <MainCol />
        </div>
        <div>
          <RightCol />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;