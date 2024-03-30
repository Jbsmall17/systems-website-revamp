import jwt from 'jsonwebtoken';
import { mailService } from './mailservice.js';
import speakeasy from 'speakeasy';

const jwtSecret = import.meta.env.VITE_JWTSECRET;
const secret = speakeasy.generateSecret({ length: 20 });


async function createOTP(email) {
    try {
        let otp = speakeasy.totp({
            secret: secret.base32,
            encoding: 'base32',
            step: 600,
            digits: 4,
            // window: 1
        });
        let sender = import.meta.env.VITE_EMAILUSER;
        let recipient = email;
        let subject = `Pastquestions Access`
        let text = `Hello,\n\nYou recently requested to access the pastquestions for the Unilag Systems Engineering Department.\nYour OTP is ${otp}\n\nIf you did not request this, please ignore this email or reply to let us know. \nThis otp is only valid for the next 10 minutes.\n\nThanks,\nSystems Engineering, Unilag`;
        let message = `An OTP has been sent to your unilag email. Kindly check spam folder as well`

        await mailService(sender, recipient, subject, text, message);
        
    } catch (e) {
        console.error(e);
        throw e;
        // res.status(422).json(e);
    }
}

const CookieOptions = {
    httpOnly: true,
    sameSite: 'none',
    secure: true
}
async function signToken (message) {
    await jwt.sign(
      {},
      jwtSecret,
      {expiresIn: '1h'},
      (err, token) => {
        if (err) throw err;
        return res.cookie('token', token, CookieOptions).json({
          success: true,
          message: message,
        });
      }
    );    
}

async function verifyOTP (otp) {
    // const { otp } = req.body;
    try {
        let verified = speakeasy.totp.verify({
            secret: secret.base32,
            encoding: 'base32',
            token: otp,
            digits: 4,
            step: 600,
            window: 1
        });
        if (verified) {
            return await signToken('Access granted')
        } else {
            // return res.status(400).json({ message: 'Invalid OTP' });
            throw new Error('Invalid OTP');
        }        
      } catch (err) {
        console.error(err)
        throw new Error('Invalid OTP');
        // return res.status(400).json({ message: 'Invalid OTP' });
      }   
}



function isAuth (req, next) {
    const { token } = req.cookies;
    if (!token) {
        return { success: false, status: 401, message: "Unauthorized", description: 'User has no authorization to this resource' };
        // return res.status(401).json({
        //     success: false,
        //     message: "Unauthorized",
        //     description: 'User has no authorization to this resource'
        // })
    }

    try {
        const decoded = jwt.verify(token, jwtSecret);    
        req.user = decoded;
        next();
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return { message: 'Unauthorized', status: 400, description: "Token Expired" };
            // return res.status(400).clearCookie('token', '').json({
            //     message: 'Unauthorized',
            //     description: "Token Expired",
            // });
        }
        console.error(err)
        return { message: 'Unauthorized', status: 401, description: 'User has no authorization to this resource' };
        // return res.status(401).json({ message: 'Unauthorized', description: 'User has no authorization to this resource' });
    }
}

export {
    createOTP, verifyOTP, isAuth
};
