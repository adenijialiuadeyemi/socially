import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/ui/ModeToggle";

import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default async function Home() {

  return (
    <div className="m-4">
      Home Page Content
    </div>
  );
}
