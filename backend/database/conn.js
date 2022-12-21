import mongoose from 'mongoose';

mongoose.set('strictQuery', false);

mongoose
	.connect('mongodb://localhost:27017/forumDataBase')
	.then(() => {
		console.log(`connected to mongodb`);
	})
	.catch((err) => {
		console.log(err);
	});
