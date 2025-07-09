import { NextResponse } from 'next/server';
import { transporter } from '../../../config/nodemailer';
import { TraderCompletionMail } from './template';

export async function POST(req) {
    const data = await req.json();
    const mailData = {
        from: '"GTCFX" <portal@mx2.gtcmail.com>',
        to: data?.email,
        subject: "GTCFX Demo Account - Activation Details",
        html: TraderCompletionMail(data)
    };
    try {
        await transporter.sendMail(mailData);
        return NextResponse.json({ message: "Send Successfully!" }, { status: 200 })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: 'Error Sending Mail' }, { status: 500 })
    }
}