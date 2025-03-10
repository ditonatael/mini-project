import Image from "next/image";
import SingupForm from "~/components/Forms/SignupForm/SignupForm";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export default function Signup() {
  return (
    <div className="h-screen w-full flex">
      <div className="hidden md:block w-1/2 h-full relative">
        <Image
          src={"/signup-asset.webp"}
          alt="Signup"
          fill
          sizes="fill"
          quality={100}
          className="object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 h-screen overflow-y-scroll py-14 px-8 xl:px-36">
        <div className="w-full h-full flex flex-col gap-6">
          <h1 className="text-2xl font-bold text-center">Sign up</h1>
          <div className="flex items-center justify-center gap-6">
            <div className="size-10 border rounded-full flex items-center justify-center hover:cursor-pointer hover:bg-gray-200">
              <FcGoogle size={20} />
            </div>
            <div className="size-10 rounded-full flex items-center justify-center bg-black hover:cursor-pointer hover:bg-gray-800">
              <FaApple size={20} className="text-white" />
            </div>
          </div>
          <div className="divider divider-neutral">or</div>
          <SingupForm />
        </div>
      </div>
    </div>
  );
}
