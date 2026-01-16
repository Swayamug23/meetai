"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const  HomeView = () => {

    const router = useRouter()

  const {
    data: session,
  } = authClient.useSession();

  if (!session) {
    return(
      <p>Loading...</p>
    )
  }

  
    return (
      <>
        <div>
          logged in as {session.user.name}
        </div>
        <Button onClick={() => {
          authClient.signOut({
            fetchOptions:{
                onSuccess: ()=> router.push("/sign-in") 
            }
          });
        }}>
          Sign Out
        </Button>
      </>
    );

    }
    