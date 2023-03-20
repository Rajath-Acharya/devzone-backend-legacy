import express from 'express';
import AuthRouter from './routes/auth.routes';
import dotenv from 'dotenv';
import sequelizeConnection from './db/config';
import logger from './utils/logger';

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.use('/api/v1/', AuthRouter);

async function connectDatabase() {
	try {
		await sequelizeConnection.sync();
		logger.info('DB connected');
	} catch(error) {
		logger.info('Failed to connect database');
	}
}

app.listen(PORT, async () => {
	await connectDatabase();
	logger.info(`Server is listening on port ${PORT}`);
});