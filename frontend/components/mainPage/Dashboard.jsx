import React from 'react';
import LeftCol from './leftcolumn/LeftCol';
import MainCol from './middlecolumn/MainCol';
import RightCol from './rightcolumn/RightCol';
import Navbaar from '../layouts/Navbaar';
import { useState } from 'react';

const Dashboard = () => {
	const [currLeft, setCurrLeft] = useState('polygon');
	const [currRight, setCurrRight] = useState('chatroom');
	console.log('curr-left :', currLeft);
	console.log('curr-right :', currRight);
	return (
		<div className=" shadow-lg bg-zinc-900 text-white h-screen fixed overflow-y-scroll">
			<div className="grid grid-flow-col auto-cols-auto divide-x">
				<div>
					<LeftCol currLeft={currLeft} setCurrLeft={setCurrLeft} />
				</div>
				<div>
					<Navbaar currLeft={currLeft} currRight={currRight} />
					<hr></hr>
					<MainCol />
				</div>
				<div>
					<RightCol currRight={currRight} setCurrRight={setCurrRight} />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
