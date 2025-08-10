    // lib/airtable.js
    import Airtable from 'airtable';

    Airtable.configure({
      endpointUrl: 'https://api.airtable.com',
      apiKey: process.env.AIRTABLE_API_KEY, // Store in environment variable
    });

    const base = Airtable.base(process.env.AIRTABLE_BASE_ID); // Store in environment variable

    export { base };