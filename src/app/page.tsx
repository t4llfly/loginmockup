import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="fixed inset-0 overflow-y-clip grid grid-rows-[20px_1fr_20px] items-center
    bg-background bg-cover bg-center bg-[url('/bg.jpg')] justify-items-center h-screen after:bg-background/60
    font-[family-name:var(--font-open-sans)] after:absolute after:inset-0">
      <main className="bg-card sm:bg-card/40 mx-2 sm:mx-0 sm:backdrop-blur-2xl border border-white/40 dark:border-white/10 z-2 p-8 flex rounded-xl flex-col row-start-2 justify-items-center items-center">
        <h1 className="text-center text-4xl font-extrabold tracking-tight">
          404 NOT FOUND
        </h1>

        <p className="mt-[32px] grid w-full max-w-sm text-center items-center gap-3">
          Страница, которую вы ищете, не существует
        </p>


        <Button asChild className="mt-[32px] w-full items-center">
          <Link href={'login'}>Войти</Link>
        </Button>
      </main>

      <h1 className="text-stroke opacity-20 text-transparent z-1 overflow-x-clip absolute bottom-[-200] left-0
      text-center text-[400px] font-extrabold select-none">
        EMPTY
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
