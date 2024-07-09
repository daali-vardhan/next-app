import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {  buttonVariants } from "./button";

import {
  GitHubLogoIcon,
  HamburgerMenuIcon,
  LinkedInLogoIcon,
  FileTextIcon
} from "@radix-ui/react-icons";
import ThemeToggle from "./theme-toggle";
import Logo from "./logo";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export default function mobileNav() {
  return (
    <nav className="px-4 py-2 w-full justify-between flex items-center mx-auto sm:hidden">
      <Logo />
      <Sheet>
        <SheetTrigger
          className={cn(
            buttonVariants({
              variant: "ghost",
              size: "icon",
              className: "rounded-lg",
            })
          )}
        >
          <HamburgerMenuIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all " />
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>
              <Logo />
            </SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <section className="flex flex-col gap-1 py-8">
            <Link
              href={siteConfig.blogUrl}
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "default",
                  className: "border-primary text-md text-left justify-start",
                })
              )}
            >
              <FileTextIcon className="h-[1.2rem] w-[1.2rem] mx-2 rotate-0 scale-100 transition-all " />
              <span className="sr-only">Blog link</span>
              Blogs
            </Link>
            <Link
              href={siteConfig.githubUrl}
              target="_blank"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "default",
                  className: "border-primary text-md text-left justify-start",
                })
              )}
            >
              <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem] mx-2 rotate-0 scale-100 transition-all " />
              <span className="sr-only">Github link</span>
              Github
            </Link>
            <Link
              href={siteConfig.linkedinUrl}
              target="_blank"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "default",
                  className: "border-primary text-md text-left justify-start",
                })
              )}
            >
              <LinkedInLogoIcon className="h-[1.2rem] w-[1.2rem] mx-2 rotate-0 scale-100 transition-all " />
              <span className="sr-only">LinkedIn link</span>
              Linkedin
            </Link>
            <ThemeToggle
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "default",
                  className:
                    "border-primary text-md text-left w-full flex px-6 items-center gap-2 justify-start",
                })
              )}
              variant="outline"

            ><span>Theme</span></ThemeToggle>
          </section>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
