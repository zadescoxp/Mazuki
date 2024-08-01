import Image from "next/image";

export default function Footer () {
    return (
        <div>
            <div>
                <Image src={"/assets/logo.png"} height={50} width={100} alt="Logo" />
                <p>Mazuki showcases the best anime NFTs with their detailed insights.</p>
            </div>
            <div>
                <Image src={"/assets/footer.png"} height={220} width={187} alt="Footer" />
                <div></div>
            </div>
        </div>
    )
}