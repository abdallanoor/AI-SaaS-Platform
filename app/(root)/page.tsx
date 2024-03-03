import { UserButton } from "@clerk/nextjs";
import React from "react";

export default function Home() {
  return (
    <div className="flex justify-between">
      <p>Home</p>
      {/* <UserButton afterSignOutUrl="/" /> */}
    </div>
  );
}
