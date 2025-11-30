// app/api/frame/route.js
import { NextRequest, NextResponse } from 'next/server';

// GANTI URL placeholder ini dengan URL Vercel LIVE Anda setelah deployment
const NEXT_PUBLIC_URL = 'https://YOUR_VERCEL_DOMAIN.vercel.app'; 

export async function POST(req: NextRequest): Promise<Response> {
  try {
    const body = await req.json();
    const buttonIndex = body.untrustedData.buttonIndex;

    let imageUrl;
    let buttonText;

    if (buttonIndex === 1) {
      imageUrl = `${NEXT_PUBLIC_URL}/api/image?text=You%20clicked%20the%20button!`;
      buttonText = 'Clicked!';
    } else {
      imageUrl = `${NEXT_PUBLIC_URL}/api/image?text=Error%20or%20Unknown%20Action`;
      buttonText = 'Try Again';
    }

    const frameHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Frame Response</title>
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content="${imageUrl}" />
          <meta property="fc:frame:post_url" content="${NEXT_PUBLIC_URL}/api/frame" />
          <meta property="fc:frame:button:1" content="${buttonText}" />
        </head>
        <body>
          Frame content for browser (not Farcaster)
        </body>
      </html>
    `;

    return new NextResponse(frameHtml, {
      status: 200,
      headers: {
        'Content-Type': 'text/html',
      },
    });
  } catch (error) {
    console.error('Error handling frame POST:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
