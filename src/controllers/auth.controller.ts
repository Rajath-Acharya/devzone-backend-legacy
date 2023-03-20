import {Request, Response} from 'express';
import { UserModel } from '../models/user.model';

class AuthController {

	static async login(req:Request,res:Response) {		
		res.json({message: 'Login successful'});
	}

	static async register(req:Request,res:Response) {		
		const newUser =  await UserModel.create({
			username: req.body.username,
			email: req.body.email,
			password: req.body.password
		});

		const user = await UserModel.findOne({ where: { email: newUser.email }});
		user.password = null;
		res.json(user);
	}

	static async logout(req:Request,res:Response) {
		res.json({message: 'Logout successful'});
	}
}

export default AuthController;