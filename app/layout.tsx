import './globals.css'
import truth from '@/lib/truth'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Script from 'next/script'
import Nav from '@/components/Nav'


const inter = Inter({ subsets: ['latin'] })

export const metadata = truth.metadata



 
function GoogleAnalyticsTag() {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-XK7DCLVXT4" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-XK7DCLVXT4');
        `}
      </Script>
    </>
  )
}
 


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="images/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="images/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="images/favicons/favicon-16x16.png" />
        <link rel="manifest" href="images/favicons/site.webmanifest" />
        <link rel="mask-icon" href="images/favicons/safari-pinned-tab.svg" color="#5bbad5" />

      </Head>
      <GoogleAnalyticsTag />

      <body className={inter.className}>
        <Nav />
        {children}
        </body>
    </html>
  )
}
