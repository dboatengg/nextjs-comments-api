import { cookies } from "next/headers";

// POST request to log out the user by clearing the authentication cookie
export async function POST() {
    const cookieStore = await cookies();
    // cookieStore.delete("token", { httpOnly: true });

    cookieStore.set("token", "", {httpOnly: true, path: "/", maxAge: 0, });
  
  return new Response(JSON.stringify({ message: "Logout successful" }), { status: 200 });
}