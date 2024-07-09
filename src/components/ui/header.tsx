import Logo from "./logo";
import ThemeToggle from "./theme-toggle";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import MobileNav from "./mobileNav";
import { buttonVariants } from "./button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


export default function Header({
  className,
}: {
  className?: string;
}) {
  return (
    <header
      className={cn(
        className,
        "bg-primary/10 gap-2 rounded-xl backdrop-blur-sm sticky top-0 mx-auto mb-4 "
      )}
    >
      <MobileNav />
      <nav className="px-4 py-2 w-full hidden justify-between sm:flex items-center mx-auto">
              <Logo />

        <Link
          href={siteConfig.blogUrl}
          className={cn(
            buttonVariants({
              variant: "ghost",
              size: "default",
              className: "mr-auto ml-4 text-md",
            })
          )}
        >
          blogs
        </Link>
        <Link
          href={siteConfig.githubUrl}
          className={cn(
            buttonVariants({
              className:
                "rounded-full hover:bg-primary active:bg-primary bg-transparent transition-colors outline-none border-none",
              variant: "outline",
              size: "icon",
            })
          )}
        >
          <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all " />
          <span className="sr-only">Github link</span>
        </Link>
        <Link
          href={siteConfig.linkedinUrl}
          className={cn(
            buttonVariants({
              className:
                "rounded-full hover:bg-primary bg-transparent active:bg-primary transition-colors outline-none border-none",
              variant: "outline",
              size: "icon",
            })
          )}
        >
          <LinkedInLogoIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all " />
          <span className="sr-only">LinkedIn link</span>
        </Link>
        <ThemeToggle className="outline-none border-none bg-transparent" />
      </nav>
    </header>
  );
}
