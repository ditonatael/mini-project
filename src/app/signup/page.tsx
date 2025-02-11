import Image from "next/image";

export default function Signup() {
  return (
    <div className="h-screen w-full flex">
      <div className="w-1/2 h-full relative">
        <Image
          src={"/signup-asset.webp"}
          alt="Signup"
          fill
          quality={100}
          objectFit="cover"
        />
      </div>
    </div>
  );
}
