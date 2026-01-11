"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const {
    data: session,
  } = authClient.useSession();

  if (session)
    return (
      <>
        <div>
          logged in as {session.user.name}
        </div>
        <Button onClick={() => {
          authClient.signOut();
        }}>
          Sign Out
        </Button>
      </>
    );

    return(
      <>
      <div>
        Hello world</div>
        <Link href="/sign-in">Sign In</Link>
      </>
    )}
    