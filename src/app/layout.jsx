import { Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const poppins = Poppins({
  weight: ["200", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "HomeCarely - Premium Caregiving Services",
  description:
    "Trusted caregiving services for your loved ones. Baby care, elderly care, and sick care with professional caregivers.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={`dark ${poppins.className}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
