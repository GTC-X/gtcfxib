import { NextResponse } from 'next/server';
export async function POST(req){
    if(req.method === 'POST'){
        const {phone} = await req.json();
        try{
            const accountSid = "ACb3216b1a3a0dfc99dd6fa1ba43beb482";
            const authToken = "0377cbda208a73d7f1bdb9b0e629b36d";
            const verifySid = "VA918e8436aecd9258613c190a465e59aa";
            const client = require("twilio")(accountSid, authToken);
          const response =  client.verify.v2.services(verifySid)
            .verifications.create({ to: phone, channel: "sms" })
            .then((verification)=>console.log(verification.status))
            .then(()=>{
                const readline = require('readline').createInterface({
                    input:process.stdin,
                    output:process.stdout
                });
                readline.question("Please Enter OTP",(otpCode)=>{
                    client.verify.v2.services(verifySid).verificationChecks.create({ to: phone, code: otpCode })
                    .then((verification_check) => console.log(verification_check.status))
                    .then(() => readline.close());
                })
            });
            return NextResponse.json({message:"OTP Sent Successfully"},{status:200})
        }catch(error){
            console.error('Error sending OTP:', error);
            return Response.json({ error: 'Failed to send OTP'},{status:400});
        }
    }
}
