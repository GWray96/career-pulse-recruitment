import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Career Pulse - Home',
  description: 'Welcome to Career Pulse - Your trusted recruitment partner',
};

export default async function RootPage() {
  redirect('/home');
} 