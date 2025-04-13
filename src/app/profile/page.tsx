import ChangePasswordModal from "@/components/profile/ChangePasswordModal";
import ChangeEmailModal from "@/components/profile/ChangeEmailModal";
import {LeaveAccountAlert} from "@/components/profile/LeaveAccountAlert";

export const metadata = {
    title: "Профиль",
}

export default function Profile() {
  return (
    <div className="fixed inset-0 overflow-y-clip grid grid-rows-[20px_1fr_20px] items-center after:bg-background/60
    bg-background bg-cover bg-center bg-[url('/bg.jpg')] justify-items-center h-screen
    font-[family-name:var(--font-open-sans)] after:absolute after:inset-0">
      <main className="bg-card sm:bg-card/40 sm:backdrop-blur-2xl border border-white/40 dark:border-white/10 z-2 p-8 flex rounded-xl flex-col row-start-2 items-left">
        <h1 className="text-left text-4xl font-extrabold tracking-tight">
          ПРОФИЛЬ
        </h1>

          <div className="mt-[32px] gap-y-[20px] sm:gap-x-[40px] items-center text-center grid grid-cols-1 sm:grid-cols-3">
              <div className="flex flex-col">
                    <p className="leading-7 [&:not(:first-child)]:mt-6">Имя</p>
                    <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Иван</h2>
                </div>
              <div className="flex flex-col">
                  <p className="leading-7 [&:not(:first-child)]:mt-6">Никнейм</p>
                  <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">example</h2>
              </div>
              <div className="flex flex-col">
                    <p className="leading-7 [&:not(:first-child)]:mt-6">Фамилия</p>
                    <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Иванов</h2>
                </div>
                <div className="flex flex-col">
                    <p className="leading-7 [&:not(:first-child)]:mt-6">Дата рождения</p>
                    <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">15.01</h2>
                </div>
                <div className="flex flex-col">
                    <p className="leading-7 [&:not(:first-child)]:mt-6">Электронная почта</p>
                    <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">example@example.com</h2>
                </div>

                <div className="flex flex-col">
                    <p className="leading-7 [&:not(:first-child)]:mt-6">Дата регистрации</p>
                    <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">08.04.2025</h2>
                </div>
            </div>
            <div className="mt-[32px] flex gap-y-4 sm:gap-y-0 sm:gap-x-4 flex-col sm:flex-row mx-auto items-center">
                <ChangePasswordModal/>
                <ChangeEmailModal/>
                <LeaveAccountAlert/>
            </div>
      </main>

      <h1 className="text-stroke opacity-20 text-transparent z-1 overflow-x-clip absolute bottom-[-200] left-0 text-center text-[400px] font-extrabold">
        PROFILE
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
