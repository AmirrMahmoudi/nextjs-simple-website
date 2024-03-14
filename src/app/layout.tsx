import "./globals.css"

import {Figtree} from "next/font/google"
import localFont from "next/font/local"

const figtree=Figtree({
    display:"swap",subsets:["latin"],
    weight:["300","400","500","600","700","800","900"]
    ,
    variable:"--font-figtree"
})

const vazirmatn=localFont({
    src:[
        {
        path:"../../public/fonts/vazirmatn/Vazirmatn-Thin.woff2",
        weight:"100",
        style:"normal"
        },
        {
        path:"../../public/fonts/vazirmatn/Vazirmatn-Light.woff2",
        weight:"300",
        style:"normal"
        },
        {
        path:"../../public/fonts/vazirmatn/Vazirmatn-Regular.woff2",
        weight:"400",
        style:"normal"
        },
        {
        path:"../../public/fonts/vazirmatn/Vazirmatn-SemiBold.woff2",
        weight:"600",
        style:"normal"
        }
        ,
        {
        path:"../../public/fonts/vazirmatn/Vazirmatn-Bold.woff2",
        weight:"700",
        style:"normal"
        },
        {
        path:"../../public/fonts/vazirmatn/Vazirmatn-Black.woff2",
        weight:"900",
        style:"normal"
        }
    ],
    variable:"--font-vazirmatn"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html  dir="rtl" className={`${figtree.variable} ${vazirmatn.variable}`}>
       <body className="flex flex-col min-h-screen font-bold uppercase">
        <header className="bg-gray-200 flex items-center justify-center text-3xl h-20">دوره معماری ری اکت</header>
        <div className="flex-1 flex  justify-center items-center">
        {children}
        </div>
        <footer className="bg-gray-200 flex items-center justify-center text-3xl h-20">FOOTER</footer>
      </body>
    </html>
  );
}
