// app/page.js

// 🚨 GANTI URL placeholder ini dengan URL Vercel LIVE Anda setelah deployment pertama!
const NEXT_PUBLIC_URL = 'https://YOUR_VERCEL_DOMAIN.vercel.app'; 

// FUNGSI INI SUDAH DIKOREKSI SINTAKSNYA
export async function generateMetadata() {
  const frameMetadata = {
    'fc:frame': 'vNext',
    'fc:frame:image': `${NEXT_PUBLIC_URL}/api/image?text=Welcome%20to%20my%20Farcaster%20Frame!`,
    'fc:frame:post_url': `${NEXT_PUBLIC_URL}/api/frame`,
    'fc:frame:button:1': 'Click Here',
  };

  return {
    title: 'My Farcaster Frame',
    description: 'A simple interactive Farcaster Frame.',
    openGraph: {
      title: 'My Farcaster Frame',
      description: 'A simple interactive Farcaster Frame.',
      images: [`${NEXT_PUBLIC_URL}/api/image?text=Welcome%20to%20my%20Farcaster%20Frame!`],
    },
    other: frameMetadata,
  };
}

export default function Page() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Farcaster Frame is Live!</h1>
      <p>This is the web view. The Frame metadata is in the source code.</p>
    </div>
  );
}
