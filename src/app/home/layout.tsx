import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Career Pulse - Home',
  description: 'Welcome to Career Pulse - Your trusted recruitment partner',
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 