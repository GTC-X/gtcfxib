import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { email, type } = await req.json();
    try {
        // Forward the request to the actual API
        const response = await axios.post(`http://m.mygtc.app/api/pub/getgcode`, { email, type }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });

        console.log("dfasdf", { response })
        return NextResponse.json({ message: response?.data?.message, success: true }, { status: 200 })

    } catch (error) {
        console.error("Error in proxy:", error);
        return new Response(({ success: false, error }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
