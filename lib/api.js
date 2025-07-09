export const sendForm = async (data) =>
  fetch("/api/email", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

// pages/api/insertData.js
import { insertData } from '@/lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { value1, value2 } = req.body;

    const query = `
            INSERT INTO your_table_name (column1, column2)
            VALUES (@value1, @value2)
        `;

    try {
      const result = await insertData(query, { value1, value2 });
      res.status(200).json({ success: true, result });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Only POST requests are allowed' });
  }
}

