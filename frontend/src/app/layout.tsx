import './globals.css'
import Header from '@/components/Header';
import Footer from '@/components/Footer1';
import ParticlesBackground from '@/components/Particals';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='.light'>
          <ParticlesBackground/>
          <Header />
          <div style={{height:'50px'}}></div>
          {children}
          <Footer />

      </body>
    </html>
  );
}
