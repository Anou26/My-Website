import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from"@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import Footer from "@/components/Footer"; 

const jetbrainsMono = JetBrains_Mono({ 
subsets: ["latin"] ,
weight: ["100","200","300","400","500","600","700","800"] ,
variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Anoushka's Website",
  description: "View my Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={jetbrainsMono.variable}>
        <Header /> 
        <StairTransition />
        <PageTransition>
        {children}
        </PageTransition>
        <Footer /> {/* Add the Footer component */}
        </body>
    </html>
  );
}
