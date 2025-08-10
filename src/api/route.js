import { NextResponse } from 'next/server';

const AIRTABLE_BASE_ID = 'appR7dAci83Vf3qLH';
const AIRTABLE_TOKEN = 'patDcxttUKQ0xnaA5.0faf4ca06f552a44f492d41d726c9c42ff24ddba9c4513af907111296ad2d2db';
const AIRTABLE_TABLE = 'contact';

export async function POST(request) {
 try {
   const { name, email, phone, service, subject, message } = await request.json();
   
   if (!name || !email || !message) {
     return NextResponse.json(
       { error: 'Name, email, and message are required' },
       { status: 400 }
     );
   }
   
   const response = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE}`, {
     method: 'POST',
     headers: {
       'Authorization': `Bearer ${AIRTABLE_TOKEN}`,
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       fields: {
         Name: name,
         Email: email,
         Phone: phone || '',
         Service: service || '',
         Subject: subject || '',
         Message: message,
         SubmittedAt: new Date().toISOString(),
       },
     }),
   });
   
   if (!response.ok) {
     const error = await response.json();
     throw new Error(error.error?.message || 'Failed to submit to Airtable');
   }
   
   return NextResponse.json({ success: true });
 } catch (error) {
   return NextResponse.json(
     { error: error.message || 'Failed to submit the form' },
     { status: 500 }
   );
 }
}