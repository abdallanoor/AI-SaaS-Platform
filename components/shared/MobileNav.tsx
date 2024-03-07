"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import { SignedOut } from "@clerk/clerk-react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <header className="header">
      <nav className="flex gap-2">
        <SignedIn>
          <Sheet>
            <SheetTrigger>
              {/* <Image
                src="/assets/icons/menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="cursor-pointer"
              /> */}
              <Menu className="w-7 h-7" />
            </SheetTrigger>
            <SheetContent
              side={"left"}
              className="sheet-content bg-[#171717] border-stone-800 sm:w-64"
            >
              <>
                <div className="pl-3 flex justify-between">
                  <Image
                    src="/assets/images/logo.svg"
                    alt="logo"
                    width={80}
                    height={23}
                  />
                  <SheetClose className="flex h-8 w-8  items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white focus-visible:outline-none">
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                  </SheetClose>
                </div>

                <ul className="header-nav_elements">
                  {navLinks.map((link) => {
                    const isActive = link.route === pathname;
                    return (
                      <li
                        key={link.route}
                        // className={`${
                        //   isActive && "bg-[#2f2f2f]"
                        // } flex whitespace-nowrap rounded text-[#ececec] p-2 w-full`}
                        className={` rounded-lg  w-full  ${
                          isActive
                            ? "bg-[#2f2f2f] "
                            : " hover:bg-[#212121] text-[#ececec]"
                        }`}
                      >
                        <Link className="sidebar-link" href={link.route}>
                          <Image
                            src={link.icon}
                            alt="logo"
                            width={20}
                            height={20}
                            className="brightness-200 "
                          />

                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
          <Button asChild className="button bg-purple-gradient bg-cover">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </nav>
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={80}
          height={28}
        />
      </Link>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </header>
  );
}
