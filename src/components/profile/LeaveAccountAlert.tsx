"use client"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import {DoorOpen} from "lucide-react";
import { useRouter } from "next/navigation";

export function LeaveAccountAlert() {
    const router = useRouter()

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className="w-[270px]" variant="destructive"><DoorOpen/> Выйти из аккаунта</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Выйти из аккаунта?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Вы уверены, что хотите выйти из аккаунта? Вы всегда можете войти обратно по
                        вашей электронной почте и паролю.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Отмена</AlertDialogCancel>
                    <AlertDialogAction onClick={() => router.push("/login")}>Выйти</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
