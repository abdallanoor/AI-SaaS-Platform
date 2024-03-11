import MobileNav from "@/components/shared/MobileNav";
import Sidebar from "@/components/shared/Sidebar";
import { Toaster } from "@/components/ui/toaster";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="root">
      <Sidebar />

      <MobileNav />

      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
      <Toaster />
    </main>
    // <div className="pr-6 transition-[padding] md:p-0 pl-20 md:pl-0">
    //   <div className="flex py-6 h-screen h-screen-ios md:py-0">
    //     <div className="relative flex flex-col grow max-w-full pt-16 bg-n-1 rounded-xl dark:bg-[#292d32] overflow-y-auto scroll-smooth scrollbar-none md:rounded-none">
    //       <div className="absolute top-0 left-0 right-0 z-10 flex items-center h-16 pl-2 pr-4 border-b border-[#ffffff29] bg-n-1 rounded-t-xl md:justify-between md:px-3 dark:bg-[#292d32] dark:border-[#ffffff29] fixed md:z-30 md:rounded-none">
    //         <Link href="/" className="">
    //           <Image
    //             src="/assets/images/logo-text.svg"
    //             alt="logo"
    //             width={180}
    //             height={28}
    //           />
    //         </Link>
    //         <div className="relative z-10 ml-auto md:ml-2">
    //           <UserButton afterSignOutUrl="/" />
    //         </div>
    //       </div>
    //       <div className="flex flex-col grow overflow-y-auto scroll-smooth scrollbar-none">
    //         <div className="relative flex flex-col grow max-h-full overflow-hidden transition-[padding] pr-80 xl:pr-0">
    //           <div className="grow overflow-y-auto scroll-smooth scrollbar-none">
    //             <div className="relative h-64 max-h-950:h-48 max-h-850:h-40 bg-n-2 md:h-36 dark:bg-n-7">
    //               <Image
    //                 src="/assets/images/bg.webp"
    //                 alt="bg"
    //                 width={100000}
    //                 height={1000}
    //               />
    //             </div>
    //             <div className="max-w-[66.5rem] mx-auto px-10 pb-10 md:px-0 md:pb-0">
    //               <div className="relative -mt-[4.75rem] border border-[#ffffff29] bg-n-1 rounded-[1.25rem] md:mt-0  dark:bg-[#292d32] dark:border-[#ffffff29]">
    //                 <div className="p-16 lg:p-8 md:px-5">
    //                   <div className="max-w-[37.5rem] mx-auto 4xl:max-w-[34.5rem]">
    //                     <div className="mb-12 text-center md:mb-8">
    //                       <div className="mb-2 text-2xl lg:text-h3 md:max-w-[16rem] md:mx-auto">
    //                         Unlock the power of AI
    //                       </div>{" "}
    //                       <div className="mb-2 text-2xl lg:text-h3 md:max-w-[16rem] md:mx-auto">
    //                         Unlock the power of AI
    //                       </div>{" "}
    //                       <div className="mb-2 text-2xl lg:text-h3 md:max-w-[16rem] md:mx-auto">
    //                         Unlock the power of AI
    //                       </div>{" "}
    //                       <div className="mb-2 text-2xl lg:text-h3 md:max-w-[16rem] md:mx-auto">
    //                         Unlock the power of AI
    //                       </div>{" "}
    //                       <div className="mb-2 text-2xl lg:text-h3 md:max-w-[16rem] md:mx-auto">
    //                         Unlock the power of AI
    //                       </div>{" "}
    //                       <div className="mb-2 text-2xl lg:text-h3 md:max-w-[16rem] md:mx-auto">
    //                         Unlock the power of AI
    //                       </div>{" "}
    //                       <div className="mb-2 text-2xl lg:text-h3 md:max-w-[16rem] md:mx-auto">
    //                         Unlock the power of AI
    //                       </div>{" "}
    //                       <div className="mb-2 text-2xl lg:text-h3 md:max-w-[16rem] md:mx-auto">
    //                         Unlock the power of AI
    //                       </div>{" "}
    //                       <div className="mb-2 text-2xl lg:text-h3 md:max-w-[16rem] md:mx-auto">
    //                         Unlock the power of AI
    //                       </div>{" "}
    //                       <div className="mb-2 text-2xl lg:text-h3 md:max-w-[16rem] md:mx-auto">
    //                         Unlock the power of AI
    //                       </div>{" "}
    //                       <div className="mb-2 text-2xl lg:text-h3 md:max-w-[16rem] md:mx-auto">
    //                         Unlock the power of AI
    //                       </div>{" "}
    //                       <div className="mb-2 text-2xl lg:text-h3 md:max-w-[16rem] md:mx-auto">
    //                         Unlock the power of AI
    //                       </div>{" "}
    //                       <div className="mb-2 text-2xl lg:text-h3 md:max-w-[16rem] md:mx-auto">
    //                         Unlock the power of AI
    //                       </div>{" "}
    //                       <div className="mb-2 text-2xl lg:text-h3 md:max-w-[16rem] md:mx-auto">
    //                         Unlock the power of AI
    //                       </div>{" "}
    //                       <div className="mb-2 text-2xl lg:text-h3 md:max-w-[16rem] md:mx-auto">
    //                         Unlock the power of AI
    //                       </div>{" "}
    //                       <div className="mb-2 text-2xl lg:text-h3 md:max-w-[16rem] md:mx-auto">
    //                         Unlock the power of AI
    //                       </div>{" "}
    //                       <div className="mb-2 text-2xl lg:text-h3 md:max-w-[16rem] md:mx-auto">
    //                         Unlock the power of AI
    //                       </div>{" "}
    //                       <div className="mb-2 text-2xl lg:text-h3 md:max-w-[16rem] md:mx-auto">
    //                         Unlock the power of AI
    //                       </div>{" "}
    //                       <div className="mb-2 text-2xl lg:text-h3 md:max-w-[16rem] md:mx-auto">
    //                         Unlock the power of AI
    //                       </div>{" "}
    //                       <div className="mb-2 text-2xl lg:text-h3 md:max-w-[16rem] md:mx-auto">
    //                         Unlock the power of AI
    //                       </div>{" "}
    //                       <div className="mb-2 text-2xl lg:text-h3 md:max-w-[16rem] md:mx-auto">
    //                         Unlock the power of AI
    //                       </div>{" "}
    //                       <div className="mb-2 text-2xl lg:text-h3 md:max-w-[16rem] md:mx-auto">
    //                         Unlock the power of AI
    //                       </div>{" "}
    //                       <div className="mb-2 text-2xl lg:text-h3 md:max-w-[16rem] md:mx-auto">
    //                         Unlock the power of AI
    //                       </div>{" "}
    //                       <div className="mb-2 text-2xl lg:text-h3 md:max-w-[16rem] md:mx-auto">
    //                         Unlock the power of AI
    //                       </div>{" "}
    //                       <div className="mb-2 text-2xl lg:text-h3 md:max-w-[16rem] md:mx-auto">
    //                         Unlock the power of AI
    //                       </div>{" "}
    //                       <div className="mb-2 text-2xl lg:text-h3 md:max-w-[16rem] md:mx-auto">
    //                         Unlock the power of AI
    //                       </div>{" "}
    //                       <div className="mb-2 text-2xl lg:text-h3 md:max-w-[16rem] md:mx-auto">
    //                         Unlock the power of AI
    //                       </div>{" "}
    //                       <div className="mb-2 text-2xl lg:text-h3 md:max-w-[16rem] md:mx-auto">
    //                         Unlock the power of AI
    //                       </div>{" "}
    //                       <div className="mb-2 text-2xl lg:text-h3 md:max-w-[16rem] md:mx-auto">
    //                         Unlock the power of AI
    //                       </div>{" "}
    //                       <div className="mb-2 text-2xl lg:text-h3 md:max-w-[16rem] md:mx-auto">
    //                         Unlock the power of AI
    //                       </div>{" "}
    //                       <div className="mb-2 text-2xl lg:text-h3 md:max-w-[16rem] md:mx-auto">
    //                         Unlock the power of AI
    //                       </div>{" "}
    //                       <div className="mb-2 text-2xl lg:text-h3 md:max-w-[16rem] md:mx-auto">
    //                         Unlock the power of AI
    //                       </div>{" "}
    //                       <div className="mb-2 text-2xl lg:text-h3 md:max-w-[16rem] md:mx-auto">
    //                         Unlock the power of AI
    //                       </div>{" "}
    //                       <div className="mb-2 text-2xl lg:text-h3 md:max-w-[16rem] md:mx-auto">
    //                         Unlock the power of AI
    //                       </div>{" "}
    //                       <div className="mb-2 text-2xl lg:text-h3 md:max-w-[16rem] md:mx-auto">
    //                         Unlock the power of AI
    //                       </div>{" "}
    //                       <div className="mb-2 text-2xl lg:text-h3 md:max-w-[16rem] md:mx-auto">
    //                         Unlock the power of AI
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="fixed inset-0 z-10 bg-n-7/90 opacity-0 invisible transition-all "></div>
    // </div>
  );
}
