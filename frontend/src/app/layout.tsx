// Import Google Fonts
import './globals.css'
import Header from '@/components/Header';
import Footer from '@/components/Footer1';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='.light'>
          <Header />
          <div style={{height:'60px'}}></div>
          {children}
          <Footer />

      </body>
    </html>
  );
}
