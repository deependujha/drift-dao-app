import React, { useState } from 'react';
import CreateForumButton from './CreateForumButton';
import ForumPostComponent from './ForumPostComponent';
import SimpleBar from 'simplebar-react';
import Createpost from './Createpost';

const ForumComponent = ({currLeft}) => {
	const [curr, setCurr] = useState('posts');

	const createAPost = () => {
		if (curr === 'posts') {
			setCurr('createPost');
		} else {
			setCurr('posts');
		}
	};

	return (
		<div>
			<div>
				{curr === 'posts' ? (
					<SimpleBar style={{ height: '85vh' }}>
						<div className="overflow-hidden">
							<ForumPostComponent />
							<ForumPostComponent />
							<ForumPostComponent />
							<ForumPostComponent />
						</div>
					</SimpleBar>
				) : (
					<div
						style={{ height: '85vh' }}
						className="flex justify-center justify-items-center"
					>
						<Createpost currLeft={currLeft} createAPost={createAPost} />
					</div>
				)}
			</div>
			<div
				className="flex justify-center justify-items-center"
				style={{ height: '8vh' }}
			>
				<CreateForumButton createAPost={createAPost} curr={curr} />
			</div>
		</div>
	);
};

export default ForumComponent;
