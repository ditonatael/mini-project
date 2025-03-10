import Image from "next/image";
import PageWrapper from "~/components/cores/PageWrapper";
import { Button } from "~/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import SigninForm from "~/components/Forms/SigninForm/SigninForm";

export default function Signin() {
  return (
    <PageWrapper>
      <div className="h-screen flex items-start justify-center pt-6">
        <div className="flex flex-col items-center gap-6 w-[343px]">
          <div className="flex flex-col items-center gap-3">
            <div className="size-14 rounded-full relative">
              <Image
                src={"/assets/sticker-smile.png"}
                alt="logo"
                fill
                sizes="fill"
                className="object-cover"
              />
            </div>
            <h1 className="text-2xl font-bold text-center">Log in</h1>
            <span className=" inline-flex gap-1">
              Don't have an account?{" "}
              <a href="/signup" className="text-sky-600">
                Sign up
              </a>
            </span>
          </div>
          <div className="w-full flex flex-col gap-3">
            <Button className="w-full rounded-full" variant={"outline"}>
              <FcGoogle />
              Continue With Google
            </Button>
            <Button className="w-full rounded-full">
              <FaApple />
              Continue With Apple
            </Button>
          </div>
          <div className="divider  divider-neutral">or</div>
          <div className="w-full">
            <SigninForm />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
