import React, { useEffect, useState } from 'react';
import CreateForumButton from './CreateForumButton';
import ForumPostComponent from './ForumPostComponent';
import SimpleBar from 'simplebar-react';
import Createpost from './Createpost';
import axios from 'axios';

const ForumComponent = ({ currLeft }) => {
	const [fetchingPosts, setFetchingPosts] = useState(false);
	const [curr, setCurr] = useState('posts');
	const [posts, setPosts] = useState([]);

	const createAPost = () => {
		if (curr === 'posts') {
			setCurr('createPost');
		} else {
			setCurr('posts');
			fetchPosts();
		}
	};

	useEffect(() => {
		fetchPosts();
	}, [currLeft]);

	const fetchPosts = async () => {
		setFetchingPosts(true);
		console.log('currleft is: ', currLeft);
		axios
			.get(`http://127.0.0.1:4000/getAllForumPostsOfADAO/${currLeft}`)
			.then(function (response) {
				// handle success
				setPosts(response.data);
				console.log(response);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			});
	};

	return (
		<div>
			<div>
				{curr === 'posts' ? (
					<SimpleBar style={{ height: '85vh' }}>
						<div className="overflow-hidden">
							{posts.map((pst) => (
								<div key={pst._id}>
									<ForumPostComponent pst={pst} />
								</div>
							))}
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
