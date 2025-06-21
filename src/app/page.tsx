import CreatePost from "@/components/CreatePost";
import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/ui/ModeToggle";
import WhoToFollow from "@/components/WhoToFollow";

import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

export default async function Home() {
  const user = await currentUser();
  return (

    <div className="m-4">
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
        <div className="lg:col-span-6">
          {user ? <CreatePost /> : null}
        </div>

        <div className="hidden  lg:block lg:col-span-4 sticky top-20">
          <WhoToFollow />
        </div>
      </div>
    </div>
  );
}
