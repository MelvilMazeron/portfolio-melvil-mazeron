import { Button, buttonVariants } from "@/components/ui/button"
import {Section} from "./Section"
import { GithubIcon } from "./icons/GithubIcon"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { LinkedinIcon } from "./icons/LinkedinIcon"

export const Header = () => {
    return (
        <header className="sticky top-0 py-4">
            <section className="flex items-baseline">
                <h1 className="text-lg font-bold text-primary">Melvil.com</h1>
                <div className="flex-1" />
                <ul className="flex items-center gap-2">
                    <Link
                    href="https://github.com/MelvilMazeron" 
                        className={cn(buttonVariants({variant: "outline"}), "size-6 py-0")}>
                        <GithubIcon size={12} className="text-foreground" />
                    </Link>

                    <Link
                    href="https://www.linkedin.com/in/melvil-mazeron/" 
                        className={cn(buttonVariants({variant: "outline"}), "size-6 py-0")}>
                        <LinkedinIcon size={12} className="text-foreground" />  ,
                    </Link>

                    <Link
                    href="https://github.com/MelvilMazeron" 
                        className={cn(buttonVariants({variant: "outline"}), "size-6 py-0")}>
                        <GithubIcon size={12} className="text-foreground" />
                    </Link>
                    
                </ul>
            </section>
        </header>
    )
}

