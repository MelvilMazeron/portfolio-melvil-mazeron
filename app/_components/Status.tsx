import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { Home, LucideIcon, MessageCircle, Rss, StickyNote } from "lucide-react"
import Link from "next/link"


const SIDE_PROJECT = [
    {
        Logo: StickyNote,
        title : "Projet 1",
        description: "description"
    },
    {
        Logo: Rss, 
        title : "Projet 2", 
        description: "description"
    },
    {
        Logo: MessageCircle, 
        title : "Projet 3", 
        description: '"description'
    },
]

export const Status = () => {
    return (
      <Section className="flex max-md:flex-col items-start gap-4">
          <div className="flex-[3] w-full">
              <Card className="p-4 flex flex-col gap-2 w-full">
                  <p className="text-lg text-muted-foreground">Side Project</p>
                  <div className="flex flex-col gap-4">
                    {SIDE_PROJECT.map((project, index) => (
                        <SideProject 
                        key={index} 
                        Logo={project.Logo}
                        title={project.title}
                        description={project.description}
                        url="/" />
                    ))}
                  </div>
              </Card>
          </div>
        <div className="flex-[2] w-full flex flex-col gap-4">
          <Card className="p-4 flex-1">Work</Card>
          <Card className="p-4 flex-1">Contact me</Card>
        </div>
      </Section>
    );
  };


type SideProjectProps = 
{
    Logo: LucideIcon, 
    title: string, 
    description: string,
    url: string
};


const SideProject = (props: SideProjectProps) => {
    return (
        <Link 
        href={props.url} 
        className="inline-flex items-center gap-4 hoover:bg-accent/50 transition-colors p-1 rounded">
            <span className="bg-accent text-accent-foreground p-3 rounded-sm">
                <props.Logo />
            </span>
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
        </Link>
    );
};