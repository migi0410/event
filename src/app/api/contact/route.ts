import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    // Method A: Forward to n8n / Make / Apps Script Webhook (Highly Recommended)
    // No Client ID, Secret, or Refresh Token needed on the website!
    if (webhookUrl) {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' }),
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to forward data to webhook: ${response.statusText}`);
      }

      return NextResponse.json({ success: true });
    }

    // Method B: Direct Google Sheets API connection (Fallback)
    const clientId = process.env.GOOGLE_CLIENT_ID?.trim();
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET?.trim();
    const refreshToken = process.env.GOOGLE_REFRESH_TOKEN?.trim();
    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID?.trim();
    const sheetRange = process.env.GOOGLE_SHEET_RANGE || 'Sheet1!A:F';

    if (!clientId || !clientSecret || !refreshToken || !spreadsheetId) {
      console.warn('Google Sheets configuration is incomplete in .env.local. Data received:', data);
      return NextResponse.json({ 
        success: true, 
        warning: 'Google Sheets configuration is incomplete. Form data logged in console.',
        data
      });
    }

    // 1. Exchange Refresh Token for Access Token
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        refresh_token: refreshToken,
        grant_type: 'refresh_token',
      }),
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok) {
      throw new Error(`Failed to refresh Google API access token: ${JSON.stringify(tokenData)}`);
    }

    const accessToken = tokenData.access_token;

    // 2. Append row using the Sheets API
    const timestamp = new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
    const rowValues = [
      [
        timestamp,
        data.name || '',
        data.email || '',
        data.phone || '',
        data.company || '',
        data.message || ''
      ]
    ];

    const appendUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(sheetRange)}:append?valueInputOption=USER_ENTERED`;

    const appendResponse = await fetch(appendUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: rowValues,
      }),
    });

    const appendResult = await appendResponse.json();

    if (!appendResponse.ok) {
      throw new Error(`Failed to append row to Google Sheet: ${JSON.stringify(appendResult)}`);
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error forwarding contact form to Google Sheets:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
