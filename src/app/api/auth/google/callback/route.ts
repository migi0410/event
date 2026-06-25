import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const error = searchParams.get('error');

  if (error) {
    return NextResponse.json({ error: `OAuth authorization failed: ${error}` }, { status: 400 });
  }

  if (!code) {
    return NextResponse.json({ error: 'Code parameter is missing' }, { status: 400 });
  }

  const clientId = process.env.GOOGLE_CLIENT_ID?.trim();
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET?.trim();

  if (!clientId || !clientSecret) {
    return NextResponse.json(
      { error: 'GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET is not configured in .env.local' },
      { status: 500 }
    );
  }

  // Use the same redirect URI
  const host = request.headers.get('host') || 'localhost:3000';
  const protocol = host.includes('localhost') ? 'http' : 'https';
  const redirectUri = process.env.GOOGLE_REDIRECT_URI?.trim() || `${protocol}://${host}/api/auth/google/callback`;

  try {
    // Exchange Auth Code for Tokens
    const response = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        grant_type: 'authorization_code',
      }),
    });

    const tokens = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to retrieve tokens', details: tokens },
        { status: response.status }
      );
    }

    // Output instructions with tokens
    return new NextResponse(
      `<html>
        <head>
          <title>Google Sheets Authorization Success</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 40px; background-color: #0f172a; color: #f8fafc; }
            .container { max-width: 650px; margin: 0 auto; background: #1e293b; padding: 30px; border-radius: 12px; border: 1px solid #334155; }
            h2 { color: #38bdf8; margin-top: 0; }
            pre { background: #020617; padding: 16px; border-radius: 8px; overflow-x: auto; color: #4ade80; font-size: 14px; border: 1px solid #1e293b; }
            .note { color: #94a3b8; font-size: 14px; line-height: 1.5; }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>Xác Thực Thành Công!</h2>
            <p>Vui lòng sao chép dòng bên dưới và dán vào file <code>.env.local</code> của bạn:</p>
            <pre>GOOGLE_REFRESH_TOKEN=${tokens.refresh_token || 'Lưu ý: Không nhận được Refresh Token mới. Nếu cấu hình lại, hãy xóa quyền của ứng dụng trong tài khoản Google để cấp mới.'}</pre>
            <p class="note"><strong>Lưu ý bảo mật:</strong> Hãy giữ bí mật hoàn toàn Refresh Token này để bảo vệ dữ liệu Google Sheets của bạn.</p>
          </div>
        </body>
      </html>`,
      {
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
        },
      }
    );
  } catch (err: any) {
    console.error('Error exchanging code:', err);
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 });
  }
}
