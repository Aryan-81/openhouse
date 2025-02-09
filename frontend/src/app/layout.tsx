// Import Google Fonts
import './globals.css'
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { Poppins, Alex_Brush } from 'next/font/google';
import { AuthProvider } from '../context/AuthContext';


const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const alexBrush = Alex_Brush({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='.light'>
        <AuthProvider>
          <Header />
          <div style={{height:'60px'}}></div>
          {children}
          <Footer />
        </AuthProvider>

      </body>
    </html>
  );
}
