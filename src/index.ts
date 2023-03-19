import express from 'express';
import AuthRouter from './auth';

const app = express();

const PORT = process.env.PORT || 4000;

app.use('/api/v1/', AuthRouter);

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});