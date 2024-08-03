import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="fixed w-full h-[320px] bottom-0 flex justify-between text-[#dad7cd] bg-[#111111] font-medium border-b-[10px] border-[#dad7cd]">
      <div className="ml-[20px]">
        <Image src={"/assets/logo.png"} height={50} width={100} alt="Logo" />
        <p className="mt-[-25px]">
          Mazuki showcases the best anime NFTs with their detailed insights.
        </p>
      </div>
      <div className="flex">
        <Image
          src={"/assets/footer.png"}
          height={320}
          width={287}
          alt="Footer"
          className="h-full w-auto"
        />
        <div className="p-[30px] flex flex-col border-l-[0.5px] border-[#dad7cd]">
          <h1 className="font-bold mb-[5px]">ABOUT US</h1>
          <Link href="/about">KNOW MORE</Link>
          <Link href="/gallery">GALLERY</Link>
          <Link href="/collection">COLLECTIONS</Link>

          <h1 className="font-bold mt-[20px] mb-[5px]">TECHNOLOGY</h1>
          <Link target="_blank" href="https://opensea.io/">OPENSEA</Link>
        </div>
        <div className="p-[30px] flex flex-col border-l-[0.5px] border-[#dad7cd]">
          <h1 className="font-bold mb-[5px]">OTHER</h1>
          <Link href="">LICENSE</Link>
          <Link href="">TERMS & CONDITIONS</Link>

          <h1 className="font-bold mt-[20px] mb-[5px]">FOLLOW US</h1>
          <div className="flex gap-x-[15px] items-center">
            <Link href="https://discord.com/invite/opensea" target="_blank">
              <Image
                src={"/assets/discord-light.svg"}
                height={26}
                width={26}
                alt="Discord"
                className="w-[30px] h-[auto]"
              />
            </Link>
            <Link
              href="https://twitter.com/opensea?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              target="_blank"
            >
              <Image
                src={"/assets/x-light.svg"}
                height={25}
                width={25}
                alt="X"
                className="w-[30px] h-[auto]"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
