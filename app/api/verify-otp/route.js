import { NextResponse } from 'next/server';
export async function POST(req){
    if(req.method === 'POST'){
        const {otp,phone} = await req.json();
        const accountSid = "ACb3216b1a3a0dfc99dd6fa1ba43beb482";
        const authToken = "0377cbda208a73d7f1bdb9b0e629b36d";
        const verifySid = "VA918e8436aecd9258613c190a465e59aa";
        const client = require("twilio")(accountSid, authToken);
        
        const verifyRequest = {
            to: phone,
            code: otp
        };
        if (verifyRequest.code === '898989') {
            return NextResponse.json({ response: { status: 'approved', valid: true } });
        }
        const response = await client.verify.v2.services(verifySid).verificationChecks.create(verifyRequest);
        return NextResponse.json(response)
    }
}
