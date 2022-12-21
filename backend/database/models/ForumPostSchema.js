import mongoose from 'mongoose';

const forumPostSchema = mongoose.Schema({
	dao: {
		type: String,
		default: '',
	},
	referringTo: {
		type: String,
		default: '',
	},
	title: {
		type: String,
		default: '',
	},
	content: {
		type: String,
		required: true,
	},
	createdBy: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
	support: {
		type: Number,
		default: 0,
	},
	dislike: {
		type: Number,
		default: 0,
	},
});

// 1
const reactionPostSchema = mongoose.Schema({
	post: String,
	user: String,
	// 1-support, 0-none, (-1)- dislike
	reaction: Number,
});

const ForumPostModel = mongoose.model('ForumPostModel', forumPostSchema);
const ReactionPostSchema = mongoose.model(
	'ReactionPostSchema',
	reactionPostSchema
);

export { ForumPostModel, ReactionPostSchema };
