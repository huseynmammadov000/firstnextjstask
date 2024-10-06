"use client"

import SideBar from "@/components/SideBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className="flex">
      <SideBar />  
      <div className="flex-1 p-4">
        {children}
      </div>
    </body>
  </html>
  );
}
