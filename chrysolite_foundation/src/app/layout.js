import "./globals.css";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"



export const metadata = {
  title: "Chrysolite Foundation",
  description: "Chrysolite Foundation is advancing the welfare of the future generations " +
      "in low-income communities through empowerment and education. Our mission is to create a movement" +
      " and empowerment strategy for the total man and to assist in the educational advancement and the general " +
      "welfare of the future generation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
