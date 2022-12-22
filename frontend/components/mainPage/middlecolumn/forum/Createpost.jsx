import React from 'react';
import { Button, TextInput, Label, Card, Textarea } from 'flowbite-react';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const initialValues = {
	title: '',
	description: '',
};

const Createpost = ({ currLeft, createAPost }) => {
	const [formdata, setformdata] = useState(initialValues);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setformdata({
			...formdata,
			[name]: value,
		});
	};

	const formSubmit = (e) => {
		e.preventDefault();
		// console.log('data :', formdata);
		const title = formdata.title.trim();
		const content = formdata.description.trim();
		if (title === '' || content === '') {
			Swal.fire(
				'Title or description is missing',
				'Please provide title & the description.',
				'error'
			);

			return;
		}

		axios
			.post('http://127.0.0.1:4000/forumPost', {
				dao: currLeft,
				title,
				content,
				createdBy: 'Deependu Jha',
			})
			.then(function (response) {
				console.log(response);
				setformdata(initialValues);
				Swal.fire(
					'posted',
					`Posted successfully in the ${currLeft}-Forum`,
					'success'
				);
				createAPost();
			})
			.catch(function (error) {
				console.log(error);
				Swal.fire('An error occurred', error, 'error');
			});
	};

	return (
		<div className="my-auto">
			<div style={{ width: '50vw' }}>
				<Card>
					<form className="flex flex-col gap-4">
						<div>
							<div className="mb-2 block">
								<Label htmlFor="email1" value="title" />
							</div>
							<TextInput
								value={formdata.title}
								onChange={handleInputChange}
								name="title"
								type="email"
								required={true}
							/>
						</div>
						<div id="textarea">
							<div className="mb-2 block">
								<Label htmlFor="comment" value="description" />
							</div>
							<Textarea
								id="comment"
								value={formdata.description}
								onChange={handleInputChange}
								name="description"
								placeholder="Elaborate your post..."
								required={true}
								rows={10}
							/>
						</div>
						<Button
							onClick={formSubmit}
							className=" bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-bold rounded-xl"
							type="submit"
						>
							Post it 🔥🤞🚀
						</Button>
					</form>
				</Card>
			</div>
		</div>
	);
};

export default Createpost;
