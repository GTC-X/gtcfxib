import { insertData } from '@/lib/db';

export async function POST(req) {
    try {
        const { Full_name, Email_address, Account_number, Country, Campaign_code, Campaign_name, Phone_number, create_time } = await req.json();
        const query = `
            INSERT INTO marketing_campaign (Full_name, Email_address,Account_number,Country,Campaign_code,Campaign_name,Phone_number,create_time)
            VALUES (@Full_name, @Email_address,@Account_number,@Country,@Campaign_code,@Campaign_name,@Phone_number,@create_time)
        `;

        const result = await insertData(query, { Full_name, Email_address, Account_number, Country, Campaign_code, Campaign_name, Phone_number, create_time });
        return new Response(JSON.stringify({ success: true, result }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error during data insertion:', error.message);
        return new Response(JSON.stringify({ success: false, error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}