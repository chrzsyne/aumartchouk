import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#1a202c',
            backgroundImage: 'linear-gradient(to bottom, #1a202c, #2d3748)',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          {/* Main Content Container */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
              padding: '80px',
            }}
          >
            {/* Name */}
            <h1
              style={{
                fontSize: '72px',
                fontWeight: 'bold',
                color: '#ffffff',
                marginBottom: '20px',
                textAlign: 'center',
              }}
            >
              Aurèle Martchouk
            </h1>

            {/* Headline */}
            <p
              style={{
                fontSize: '32px',
                color: '#60a5fa',
                marginBottom: '30px',
                textAlign: 'center',
              }}
            >
              SciencesPo Paris | MMFin MIT Candidate
            </p>

            {/* Description */}
            <p
              style={{
                fontSize: '24px',
                color: '#e5e7eb',
                marginBottom: '40px',
                textAlign: 'center',
                maxWidth: '900px',
                lineHeight: '1.5',
              }}
            >
              Economics & Social Policy Researcher | Financial Analyst
            </p>

            {/* Key Sections */}
            <div
              style={{
                display: 'flex',
                gap: '40px',
                marginTop: '20px',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  color: '#9ca3af',
                  fontSize: '18px',
                }}
              >
                <span style={{ fontSize: '28px', marginBottom: '8px' }}>🎓</span>
                <span>Education</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  color: '#9ca3af',
                  fontSize: '18px',
                }}
              >
                <span style={{ fontSize: '28px', marginBottom: '8px' }}>💼</span>
                <span>Experience</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  color: '#9ca3af',
                  fontSize: '18px',
                }}
              >
                <span style={{ fontSize: '28px', marginBottom: '8px' }}>📊</span>
                <span>Projects</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  color: '#9ca3af',
                  fontSize: '18px',
                }}
              >
                <span style={{ fontSize: '28px', marginBottom: '8px' }}>🔬</span>
                <span>Research</span>
              </div>
            </div>
          </div>

          {/* Bottom URL */}
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              color: '#6b7280',
              fontSize: '20px',
            }}
          >
            aumartchouk.vercel.app
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 627,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
