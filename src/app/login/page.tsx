import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import ForgotPasswordModal from "@/components/login/ForgotPasswordModal";

export const metadata = {
  title: "Авторизация",
}

export default function Login() {
  return (
    <div className="fixed inset-0 overflow-y-clip grid grid-rows-[20px_1fr_20px]
    items-center bg-background bg-cover bg-center bg-[url('/bg.jpg')] justify-items-center after:bg-background/60
    h-screen font-[family-name:var(--font-open-sans)] after:absolute after:inset-0">
      <main className="bg-card sm:bg-card/40 sm:backdrop-blur-2xl mx-2 sm:mx-0 border border-white/40 dark:border-white/10 z-2 p-8 flex rounded-xl
      flex-col row-start-2 justify-items-center items-center">
        <h1 className="text-center text-4xl font-extrabold tracking-tight">
          ВХОД
        </h1>

        <div className="mt-[32px] grid w-full gap-3">
          <Label htmlFor="email">Электронная почта</Label>
          <Input className="bg-input" type="email" id="email" placeholder="" />
        </div>
        <div className="mt-[16px] grid w-full gap-3">
          <Label htmlFor="email">Пароль</Label>
          <Input className="bg-input" type="password" id="password" placeholder="" />
        </div>


        <Button asChild className="mt-[32px] w-full items-center">
          <Link href={'profile'}>Войти</Link>
        </Button>
        <div className="mt-[16px] grid grid-cols-2 gap-3">
          <Button asChild variant="secondary" >
            <Link href={'register'}>Регистрация</Link>
          </Button>
          <ForgotPasswordModal/>
        </div>
      </main>

      <h1 className="text-stroke opacity-20 text-transparent z-1 overflow-x-clip absolute bottom-[-200]
      left-0 text-center text-[400px] font-extrabold select-none">
        LOGIN
      </h1>

      <p className="z-1 overflow-x-clip absolute bottom-5
      right-6 text-center opacity-60">
        Photo by
        <a className="ml-1.5" href={'https://unsplash.com/photos/worms-eye-view-of-white-cherry-blossom-zsAPsRjzXRI'}>
          Camille Villanueva
        </a>
      </p>
    </div>
  );
}
