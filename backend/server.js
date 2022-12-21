import 'dotenv/config';
import('./database/conn.js');
import {
	ForumPostModel,
	ReactionPostSchema,
} from './database/models/ForumPostSchema.js';
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
	res.send('hello world');
});

app.get('/getAllForumPosts', async (req, res) => {
	try {
		const result = await ForumPostModel.find();
		return res.send(result);
	} catch (e) {
		res.send(e);
	}
});

app.get('/getAllForumPostsOfADAO', async (req, res) => {
	try {
		const { dao } = req.body;
		const result = await ForumPostModel.find({ dao });
		return res.send(result);
	} catch (e) {
		res.send(e);
	}
});

app.post('/forumPost', async (req, res) => {
	try {
		const { dao, referingTo, title, content, createdBy } = req.body;
		const newForumPost = new ForumPostModel({
			dao,
			referingTo,
			title,
			content,
			createdBy,
		});

		await newForumPost.save();
		res.send('post saved successfully');
	} catch (e) {
		res.send(e);
	}
});

app.post('/commnetOnForumPost', async (req, res) => {
	try {
		const { referringTo, content, createdBy } = req.body;
		const newForumPostComment = new ForumPostModel({
			referringTo,
			content,
			createdBy,
		});

		await newForumPostComment.save();
		res.send('commented on post successfully');
	} catch (e) {
		res.send(e);
	}
});

app.post('/reactToForumPost', async (req, res) => {
	try {
		const { post, user, reaction } = req.body;
		let result = await ReactionPostSchema.findOne({ post, user });

		// console.log('result is: ', result);
		if (result) {
			if (reaction === result.reaction) {
				res.send('time pass mat kar');
				return;
			}

			let myForumPost = await ForumPostModel.findOne({ _id: post });
			if (reaction === 1) {
				myForumPost.support++;
				if (result.reaction === -1) {
					myForumPost.dislike--;
				}
			}
			if (reaction === -1) {
				myForumPost.dislike++;
				if (result.reaction === 1) {
					myForumPost.support--;
				}
			}
			if (reaction === 0) {
				if (result.reaction === 1) {
					myForumPost.support--;
				} else {
					myForumPost.dislike--;
				}
			}
			await ForumPostModel.updateOne({ _id: post }, myForumPost);
			result.reaction = reaction;
			const forumPostReaction = await ReactionPostSchema.updateOne(
				{ post, user },
				result
			);
		} else {
			const forumPost = await ForumPostModel.findOne({ _id: post });
			if (reaction == 1) {
				forumPost.support += 1;
			}
			if (reaction == -1) {
				forumPost.dislike += 1;
			}
			await ForumPostModel.updateOne({ _id: post }, forumPost);
			const forumPostReaction = await ReactionPostSchema({
				post,
				user,
				reaction,
			});
			await forumPostReaction.save();
		}
		res.send('reacted to forum post');
	} catch (e) {
		res.send(e);
	}
});

app.get('/getMyReactionOnPost', async (req, res) => {
	try {
		const { post, user } = req.body;
		if (!(post && user)) {
			res.send('null');
			return;
		}
		let result = await ReactionPostSchema.findOne({ post, user });
		if (result) {
			res.send(result);
		} else {
			result = {
				reaction: 0,
			};
			res.send(result);
		}
	} catch (e) {
		res.send(e);
	}
});

app.get('/getAllCommentsOnAPost', async (req, res) => {
	try {
		const { post } = req.body;
		const result = await ForumPostModel.find({ referringTo: post });
		res.send(result);
	} catch (e) {
		res.send(e);
	}
});

app.listen(PORT, () => {
	console.log(`server started on http://127.0.0.1:${PORT}`);
});
