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
import {Mail} from "lucide-react";

export default function ChangeEmailModal()  {
    return(
        <Dialog>
            <DialogTrigger asChild>
                <Button className="w-[270px]"><Mail/> Сменить почту</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Сменить почту</DialogTitle>
                    <DialogDescription>Здесь производится смена почты</DialogDescription>
                </DialogHeader>
                <Input type="email" id="newemail" placeholder="Новая почта" />
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="submit" onClick={() =>
                            toast.success("На почту было отправлено подтверждение", {
                                description: 'Если письма нет, проверьте папку "Спам"'
                            })
                        }>Сменить</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}