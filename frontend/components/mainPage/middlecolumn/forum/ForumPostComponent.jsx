import React, { useState } from 'react';
import { Card } from 'flowbite-react';
import Image from 'next/image';
const ForumPostComponent = () => {
	const [support, setSupport] = useState(false);
	const [dislike, setDislike] = useState(false);

	const supportPost = () => {
		setSupport(!support);
	};
	const dislikePost = () => {
		setDislike(!dislike);
	};
	return (
		<div className="my-6" style={{ marginLeft: '10vw', marginRight: '10vw' }}>
			<Card>
				<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					Noteworthy technology acquisitions 2021
				</h5>
				<hr/>
				<p className="font-normal text-gray-700 dark:text-gray-400">
					Here are the biggest enterprise technology acquisitions of 2021 so
					far, in reverse chronological order. Contrary to popular belief, Lorem
					Ipsum is not simply random text. It has roots in a piece of classical
					Latin literature from 45 BC, making it over 2000 years old. Richard
					McClintock, a Latin professor \t at Hampden-Sydney College in Virginia,
					looked up one of the more obscure Latin words, consectetur, from a
					Lorem Ipsum passage, and going through the cites of the word in
					classical literature, discovered the undoubtable source. Lorem Ipsum
					comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
					Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
					This book is a treatise on the theory of ethics, very popular during
					the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
					amet..", comes from a line in section 1.10.32. The standard chunk of
					Lorem Ipsum used since the 1500s is reproduced below for those
					interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
					Malorum" by Cicero are also reproduced in their exact original form,
					accompanied by English versions from the 1914 translation by H.
					Rackham.
				</p>

				<div className="flex justify-end">
					<button className="mx-2" onClick={supportPost}>
						<Image
							src={`${
								support
									? '/forum_icons/supported.png'
									: '/forum_icons/support.png'
							}`}
							width={35}
							height={35}
							alt="support"
						/>
					</button>
					<button className="mx-2" onClick={dislikePost}>
						<Image
							src={`${
								dislike
									? '/forum_icons/disliked.png'
									: '/forum_icons/dislike.png'
							}`}
							width={30}
							height={30}
							alt="dislike"
						/>
					</button>
					<button className="mx-2">
						<Image
							src="/forum_icons/comment.png"
							width={30}
							height={30}
							alt="dislike"
						/>
					</button>
				</div>
			</Card>
		</div>
	);
};

export default ForumPostComponent;
