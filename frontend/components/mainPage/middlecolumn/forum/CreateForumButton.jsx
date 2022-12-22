import React from 'react';

const CreateForumButton = ({ createAPost, curr }) => {
	// const createAPost = () => {
	// 	console.log("'create a post in forum' button clicked");
	// };
	return (
		<div className="my-auto">
			<button
				onClick={createAPost}
				className=" bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-bold py-3 rounded-xl"
				style={{ width: '50vw' }}
			>
				{curr === 'posts' ? 'Create a post in forum' : 'Go back to the forum'}
			</button>
		</div>
	);
};

export default CreateForumButton;
