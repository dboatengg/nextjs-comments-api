import { cookies } from "next/headers";

export async function POST(request: Request) {
  const { username, password } = await request.json();
  
    if (username === "admin" && password === "password") {
        const cookieStore = await cookies();
        cookieStore.set("token", "securetoken123", { httpOnly: true });
        return new Response(JSON.stringify({ message: "Login successful" }), { status: 200 });
    }
    return new Response(JSON.stringify({ message: "Invalid credentials" }), { status: 401 });
}
