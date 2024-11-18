export const metadata = {
  title: '문의페이지',
  description: 'Popolog 문의페이지',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <section className="flex justify-center w-full">{children}</section>;
}
