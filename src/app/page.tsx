import React from "react";
import Header from "@/components/ui/header";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <main className="h-full mx-auto max-w-screen-lg p-4 flex-1">
      <Header className="max-w-screen-lg w-full" />
      <section className="md:py-16 py-8 px-4 flex flex-col gap-4 md:flex-row leading-5 font-extralight dark:font-thin rounded-xl mx-auto items-center justify-center backdrop-blur-md bg-primary/10">
        <picture className="flex-1 grid place-items-center max-w-full">
          <Image
            src={siteConfig.profileUrl}
            className="rounded-full flex-1"
            width={300}
            height={300}
            alt="avatar"
          />
        </picture>
        <article className="flex-1 flex flex-col gap-8">
          <aside className="flex-1 leading-normal">
            <h1 className="text-6xl font-medium text-balance">
              Hi, I&apos;m <br />{" "}
              <strong className="font-mono text-primary font-light">
                Daali Vardhan
              </strong>
            </h1>
            <p className="text-2xl text-balance mt-4">
              Jr. Software Developer{" "}
              <Link
                href={siteConfig.companyurl}
                target="_blank"
                className={cn(
                  buttonVariants({
                    variant: "link",
                    className: "text-2xl p-0 m-0",
                  }),
                )}
              >
                @Epam
              </Link>
            </p>
            <p className="text-2xl text-balance">
              Full stack developer, JavaScript
            </p>
          </aside>
          <aside className="flex flex-col md:flex-row flex-1 gap-2">
            <Link
              href={siteConfig.resumeUrl}
              target="_blank"
              className={cn(
                buttonVariants({
                  variant: "default",
                  className: "flex-auto  min-w-fit",
                }),
              )}
            >
              Resume
            </Link>
            <Link
              href={siteConfig.blogUrl}
              className={cn(
                buttonVariants({
                  variant: "outline",
                  className: "flex-auto border-primary min-w-fit",
                }),
              )}
            >
              Blogs
            </Link>
          </aside>
        </article>
      </section>
    </main>
  );
}
