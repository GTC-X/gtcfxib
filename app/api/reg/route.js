import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { email,
        nickname,
        code,
        country,
        phone,
        password,
        server_id } = await req.json();
    try {
        // Forward the request to the actual API
        const response = await axios.post(`http://m.mygtc.app/api/pub/reg`, { email, nickname, code, country, phone, password, server_id }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });

        return NextResponse.json({ message: response?.data?.message, success: true }, { status: 200 })

    } catch (error) {
        return new Response(({ success: false, message: error }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
