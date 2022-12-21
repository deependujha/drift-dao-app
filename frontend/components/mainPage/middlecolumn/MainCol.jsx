import React from 'react';
import RFP from './request_for_proposal/RFP';
import SnapShotVoting from './snapshot/SnapShotVoting';
import ForumComponent from './forum/ForumComponent';
import ChatRoom from './chat_room/ChatRoom';
import Analytics from './analytics/Analytics';

const MainCol = ({ currLeft, currRight }) => {
	if (currRight == 'forum') {
		return (
			<div className="">
				<ForumComponent />
			</div>
		);
	}
	if (currRight == 'RFP') {
		return (
			<div className="">
				<RFP />
			</div>
		);
	}
	if (currRight == 'snapshot') {
		return (
			<div className="">
				<SnapShotVoting />
			</div>
		);
	}
	if (currRight == 'chatroom') {
		return (
			<div className="">
				<ChatRoom />
			</div>
		);
	} else {
		return (
			<div>
				<Analytics />
			</div>
		);
	}
};

export default MainCol;
