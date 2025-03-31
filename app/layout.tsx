import type { Metadata } from "next";
import { PrimeReactProvider } from "primereact/api";
import { Inter } from "next/font/google";
import "./globals.css";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primeicons/primeicons.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BlueScreen Consulting",
  description: "The home of BlueScreen Consulting, providing IT consulting services since 2000",
  icons: {
    icon: [
      {
        url: "/img/logo/bsc-globe.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/img/logo/bsc-globe.png",
        type: "image/png",
        sizes: "16x16",
      }
    ],
    apple: {
      url: "/img/logo/bsc-globe.png",
      type: "image/png",
      sizes: "180x180",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full h-full">
      <body className={`${inter.className} w-full h-full m-0 p-0`}>
        <PrimeReactProvider>
          <div className="w-full min-h-screen flex flex-col">
          <Navigation />
            <main className="w-full flex-grow">
            {children}
          </main>
            <Footer />
          </div>
        </PrimeReactProvider>
      </body>
    </html>
  );
}
