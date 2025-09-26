// POST request to log out the user by clearing the authentication cookie

export async function POST() {

  // Set the cookie with Max-Age=0 to remove it in the browser

  return new Response(JSON.stringify({ message: "Logout successful" }), {
    status: 200,
    headers: {
      "Set-Cookie": `token=; Path=/; HttpOnly; Max-Age=0; SameSite=Lax`,
      "Content-Type": "application/json"
    }
  });
}