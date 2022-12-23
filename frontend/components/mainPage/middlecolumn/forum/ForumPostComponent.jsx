import React, { useState, useEffect } from 'react';
import { Card } from 'flowbite-react';
import Image from 'next/image';
import axios from 'axios';

const ForumPostComponent = ({ pst }) => {
	const [myreaction, setMyReaction] = useState(0);
	const [support, setSupport] = useState(pst.support);
	const [dislike, setDislike] = useState(pst.dislike);
	const title = pst.title;
	const content = pst.content;
	const createdBy = pst.createdBy;
	const createdAt = pst.createdAt;

	const saverFunction = () => {
		axios
			.get(`http://127.0.0.1:4000/getAForumPost/${pst._id}`)
			.then(function (response) {
				// handle success
				setSupport(response.data.support);
				setDislike(response.data.dislike);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			});
	};

	useEffect(() => {
		axios
			.get(
				`http://127.0.0.1:4000/getMyReactionOnPost/?post=${pst._id}&user=Deependu_Jha`
			)
			.then((response) => {
				setMyReaction(response.data.reaction);
				saverFunction();
			})
			.catch((err) => {
				console.log('error occurred: ', err);
			});
	}, []);

	const supportBtnClicked = async () => {
		// console.log('support btn clicked');
		const currReact = myreaction === 1 ? 0 : 1;

		axios
			.post('http://127.0.0.1:4000/reactToForumPost', {
				post: pst._id,
				user: 'Deependu_Jha',
				reaction: currReact,
			})
			.then(function (response) {
				setMyReaction(currReact);
				saverFunction();
			})
			.catch(function (error) {
				console.log(error);
				// Swal.fire('An error occurred', error, 'error');
			});
	};

	const dislikeBtnClicked = async () => {
		const currReact = myreaction === -1 ? 0 : -1;
		axios
			.post('http://127.0.0.1:4000/reactToForumPost', {
				post: pst._id,
				user: 'Deependu_Jha',
				reaction: currReact,
			})
			.then(function (response) {
				setMyReaction(currReact);
				saverFunction();
			})
			.catch(function (error) {
				console.log(error);
				// Swal.fire('An error occurred', error, 'error');
			});
	};

	// const [support, setSupport] = useState(false);
	// const [dislike, setDislike] = useState(false);

	// const supportPost = () => {
	// 	setSupport(!support);
	// };
	// const dislikePost = () => {
	// 	setDislike(!dislike);
	// };
	return (
		<div className="my-6" style={{ marginLeft: '10vw', marginRight: '10vw' }}>
			<Card>
				<div className="flex justify-between">
					<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-ellipsis">
						{title}
					</h5>
				</div>
				<hr />
				<p className="font-normal text-gray-700 dark:text-gray-400">
					{content}
				</p>
				<div className="flex justify-between">
					<div className="text-pink-700">
						<div>by: {createdBy}</div>
						<div>at: {createdAt}</div>
					</div>

					<div className="flex items-center">
						<div className="flex ">
							<div className="text-green-500 font-bold items-end">
								{support}
							</div>
							<button className="mx-2" onClick={supportBtnClicked}>
								<Image
									src={`${
										myreaction === 1
											? '/forum_icons/supported.png'
											: '/forum_icons/support.png'
									}`}
									width={35}
									height={35}
									alt="support"
								/>
							</button>
						</div>
						<div className="flex">
							<div className="text-red-600 font-bold">{dislike}</div>
							<button className="mx-2" onClick={dislikeBtnClicked}>
								<Image
									src={`${
										myreaction === -1
											? '/forum_icons/disliked.png'
											: '/forum_icons/dislike.png'
									}`}
									width={30}
									height={30}
									alt="dislike"
								/>
							</button>
						</div>
						<button className="mx-2">
							<Image
								src="/forum_icons/comment.png"
								width={30}
								height={30}
								alt="dislike"
							/>
						</button>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default ForumPostComponent;
