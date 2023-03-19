import express from 'express';
import AuthRouter from './auth';
import dotenv from 'dotenv';
import sequelizeConnection from './db/config';

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use('/api/v1/', AuthRouter);

async function connectDatabase() {
	try {
		await sequelizeConnection.sync();
		console.log('DB connected');
	} catch(error) {
		console.log('Failed to connect database' );
	}
}

app.listen(PORT, async () => {
	await connectDatabase();
	console.log(`Server is listening on port ${PORT}`);
});