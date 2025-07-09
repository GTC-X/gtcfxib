import sgMail  from '@sendgrid/mail';
import { NextResponse } from 'next/server';
import otpGenerator from 'otp-generator';



sgMail.setApiKey("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");

export async function POST(req){
    if(req.method === 'POST'){
    const {email} = await req.json(); 
    const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false,digits:true,lowerCaseAlphabets:false });
    console.log('OTP IS',otp);
    const msg = {
        to: email, 
        from: 'no-reply@gtcfxmail.com',
        subject: 'OTP',
        text: `Your GTCFX OTP is ${otp}`,
      };

    try{
        await sgMail.send(msg);
        return NextResponse.json({message:otp},{status:200})
    }catch(error){
        console.error(error);
        if (error.response) {
            console.error(error.response.body);
        }
        return NextResponse.json({message:'Failed to send OTP'},{ status:500});
    }     
    }
}


