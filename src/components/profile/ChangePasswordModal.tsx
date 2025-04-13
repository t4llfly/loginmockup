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
import {Lock} from "lucide-react";

export default function ChangePasswordModal()  {
    return(
        <Dialog>
            <DialogTrigger asChild>
                <Button className="w-[270px]"><Lock/> Сменить пароль</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Сменить пароль</DialogTitle>
                    <DialogDescription>Здесь производится смена пароля</DialogDescription>
                </DialogHeader>
                <Input type="password" id="newpass" placeholder="Новый пароль" />
                <Input type="password" id="repeatpass" placeholder="Повтор пароля" />
                <div className="flex w-full items-center space-x-2">
                    <Input type="email" placeholder="Код подтверждения" />
                    <Button variant="ghost" type="submit" onClick={() =>
                        toast.success("Код отправлен на почту", {
                            description: 'Если письма нет, проверьте папку "Спам"'
                        })
                    }
                    >
                        Запросить
                    </Button>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="submit" onClick={() =>
                            toast.success("Пароль изменен")
                        }>Сменить</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}