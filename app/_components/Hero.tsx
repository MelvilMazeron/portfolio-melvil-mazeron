import { ComponentProps, ComponentPropsWithRef } from "react"
import { Section } from "./Section"
import { cn } from "@/lib/utils";
import { GithubIcon } from "./icons/GithubIcon";

const Code = ({ className, ...props }: ComponentPropsWithRef<"span">) => {
    return (
        <span
            className={cn(
                "inline-flex items-center gap-2 bg-accent/30 font-mono border hover:bg-accent/50 transition-colors border-accent px-2 py-1 text-primary rounded-sm",
                className
            )}
            {...props}
        />
    );
};

export const Hero = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full flex flex-col gap-2">
                <h2 className="font-caption text-5xl text-primary font-bold">Melvil Mazeron</h2>
                <h3 className="text-3xl font-caption text-white">Développeur junior</h3>
                <p className="text-white text-base">
                    Je suis en apprentissage, retrouvez mon{" "}
                    <a
                        href="https://github.com/MelvilMazeron"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1"
                    >
                        <Code>
                            <GithubIcon size={16} />
                            <span>Github</span>
                        </Code>
                    </a>
                </p>
            </div>
            <div className="flex-[2] max-md:m-auto ml-auto">
                <img
                    src="data:image/png;base64,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"
                    className="w-full h-auto max-w-xs max-md:w-56"
                    alt="Ma photo"
                />
            </div>
        </Section>
    );
};