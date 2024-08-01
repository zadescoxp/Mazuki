import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Mazuki",
  description: "The Ultimate NFT Insight App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <div className="w-screen flex items-center justify-between p-[1%] fixed top-0 left-0 overflow-x-hidden">
          <Image src={"/assets/logo.png"} height={50} width={100} alt="Logo" />

          <div className="flex justify-between w-[auto] gap-x-[20px] bg-[rgba(218,215,205,0.5)] rounded-full border-[#344e41] border-[1px] p-[25px] pl-[40px] pr-[40px] text-[17px] font-medium">
            <Link href="/about" className="text-black hover:text-[#344e41] ease-in duration-200">About</Link>
            <Link href="/gallery" className="text-black hover:text-[#344e41] ease-in duration-200">Gallery</Link>
            <Link href="/collections" className="text-black hover:text-[#344e41] ease-in duration-200">Collections</Link>
          </div>

          <div className="flex justify-between w-[auto] gap-x-[15px] items-center bg-[rgba(218,215,205,0.5)] rounded-full border-[#344e41] border-[1px] p-[25px] pl-[40px] pr-[40px] mr-[15px]">
            <Link href="https://discord.com/invite/opensea" target="_blank">
              <Image
                src={"/assets/discord.svg"}
                height={30}
                width={30}
                alt="Discord"
                className="w-[30px] h-[auto]"
              />
            </Link>
            <Link href="https://twitter.com/opensea?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank">
              <Image
                src={"/assets/x.svg"}
                height={30}
                width={30}
                alt="X"
                className="w-[30px] h-[auto]"
              />
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
