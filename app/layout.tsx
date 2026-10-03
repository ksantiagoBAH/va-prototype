import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'My VA | VA.gov design prototype', description: 'A redesigned My VA homepage with fictional sample data.' };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="en"><head><link rel="stylesheet" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/fonts.css`}/></head><body>{children}</body></html>; }
