"use client"

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {toast} from "sonner";

export default function ForgotPasswordModal()  {
    return(
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="secondary">Забыли пароль?</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Восстановление пароля</DialogTitle>
                    <DialogDescription>На указанную почту будет выслан код</DialogDescription>
                </DialogHeader>
                <Input type="email" id="email" placeholder="example@example.com" />
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="submit" onClick={() =>
                            toast.success("На почту была отправлена инструкция", {
                                description: 'Если письма нет, проверьте папку "Спам"'
                            })
                        }>Запросить</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}