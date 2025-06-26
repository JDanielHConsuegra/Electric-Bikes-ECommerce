"use client";

import { useAuthContext } from "@/context/authContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const  UsePublic = () => {
    const router = useRouter();
    const { isAuth } = useAuthContext();

    useEffect(() => {
        if (isAuth) {
            router.push("/"); 
}
    }, [isAuth, router]);

    return null 
}

export default UsePublic;