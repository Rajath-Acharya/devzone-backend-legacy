import {Request, Response} from 'express';

class AuthController {

	static async login(req:Request,res:Response) {
		res.json({message: 'Login successful'});
	}

	static async register(req:Request,res:Response) {
		res.json({message: 'Register successful'});
	}

	static async logout(req:Request,res:Response) {
		res.json({message: 'Logout successful'});
	}
}

export default AuthController;