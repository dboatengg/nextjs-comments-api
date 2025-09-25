# Next.js Comments API with Authentication

This is a full-stack project built with **Next.js App Router** to practice my knowledge on:

- CRUD operations with Route Handlers (`GET`, `POST`, `PUT`, `DELETE`)
- Search/filtering with URL query parameters
- Authentication using cookies
- Middleware for route protection
- Handling headers and cookies in Next.js

---

## 🚀 Features
- List all comments
- Search comments with query params (`/api/comments?search=hello`)
- Create, update, and delete comments (requires login)
- Login system with cookie-based session
- Middleware authentication guard

---

## 🛠 Tech Stack
- [Next.js 15 App Router](https://nextjs.org/)
- TypeScript
- In-memory data (can be swapped with a database later)

---

## 📂 Project Structure
```plaintext
app/
 ├─ api/
 │   ├─ comments/
 │   │   ├─ route.ts          # GET, POST (list + create)
 │   │   └─ [id]/route.ts     # PUT, DELETE (update + delete)
 │   ├─ auth/
 │   │   ├─ login/route.ts    # Login (sets cookie)
 │   │   └─ logout/route.ts   # Logout (clears cookie)
 ├─ middleware.ts             # Protects routes
lib/
 └─ data.ts                   # Dummy comments data


