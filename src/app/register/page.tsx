import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";

export const metadata = {
  title: "Регистрация",
}

export default function Register() {
  return (
    <div className="fixed inset-0 overflow-y-clip grid grid-rows-[20px_1fr_20px] items-center
    bg-background bg-cover bg-center bg-[url('/bg.jpg')] justify-items-center h-screen after:bg-background/60
    font-[family-name:var(--font-open-sans)] after:absolute after:inset-0">
      <main className="bg-card sm:bg-card/40 sm:backdrop-blur-2xl mx-2 sm:mx-0 border border-white/40 dark:border-white/10 z-2 p-8 flex rounded-xl flex-col
      row-start-2 items-left">
        <h1 className="text-center text-4xl font-extrabold tracking-tight">
          РЕГИСТРАЦИЯ
        </h1>

        <div className="mt-[32px] gap-x-3 gap-y-5 grid grid-cols-1 sm:grid-cols-2">
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="nickname">Имя пользователя</Label>
            <Input type="text" id="nickname" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="email">Электронная почта</Label>
            <Input type="email" id="email" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="password">Пароль</Label>
            <Input type="password" id="password" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="repeat-password">Повтор пароля</Label>
            <Input type="password" id="repeat-password" />
          </div>
        </div>


        <Button className="mt-[32px] w-full items-center">Регистрация</Button>

        <p className="mt-[16px] text-sm text-center text-muted-foreground">
          Регистрируясь, вы принимаете <a href={''}><b>условия соглашения</b></a>
        </p>
      </main>

      <h1 className="text-stroke opacity-20 text-transparent z-1 overflow-x-clip absolute bottom-[-200] left-0
      text-center text-[400px] font-extrabold select-none">
        REGISTER
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
