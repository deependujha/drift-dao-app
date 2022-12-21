import React from 'react';
import CreateForumButton from './CreateForumButton';
import ForumPostComponent from './ForumPostComponent';
import SimpleBar from 'simplebar-react';

const ForumComponent = () => {
	return (
		<div>
			<div className='overflow-hidden'>
				<SimpleBar style={{ height: '85vh' }}>
					<ForumPostComponent />
					<ForumPostComponent />
					<ForumPostComponent />
					<ForumPostComponent />
				</SimpleBar>
			</div>
			<div className="flex justify-center justify-items-center" style={{ height: '8vh' }}>
				<CreateForumButton />
			</div>
		</div>
	);
};

export default ForumComponent;
