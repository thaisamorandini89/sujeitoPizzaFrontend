import { cookies } from "next/headers";

export async function getCookieServer(){
    const cookieTokenStore = await cookies();
    const token = cookieTokenStore.get("session")?.value;

    return token || null;
}