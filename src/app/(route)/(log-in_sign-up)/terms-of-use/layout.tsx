import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: '이용약관',
    template: '%s | PPLOG',
  },
  description: 'PPLOG 서비스 이용약관입니다. 서비스 이용을 위한 약관 내용을 확인해주세요.',
  keywords: ['이용약관', '서비스 약관', '약관동의', '서비스 정책', 'PPLOG 이용약관'],
  openGraph: {
    title: 'PPLOG 이용약관',
    description: 'PPLOG 서비스 이용약관입니다. 서비스 이용을 위한 약관 내용을 확인해주세요.',
    type: 'website',
    images: [
      {
        url: '/myaong.png',
        width: 1200,
        height: 630,
        alt: 'PPLOG 이용약관',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
