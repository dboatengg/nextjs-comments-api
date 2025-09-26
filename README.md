# Next.js Comments API with Authentication

This is a full-stack project built with **Next.js App Router** to practice my knowledge on:

- CRUD operations with Route Handlers (`GET`, `POST`, `PUT`, `DELETE`)
- Search/filtering with URL query parameters
- Authentication using cookies
- Middleware for route protection
- Handling headers and cookies in Next.js

---

## Features
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

## Project Structure
```plaintext
app/
 ├─ api/
 │   ├─ comments/
 │   │   ├─ route.ts          # GET, POST (list + create)
 │   │   └─ [id]/route.ts     # PUT, DELETE (update + delete)
 │   ├─ (auth)/
 │   │   ├─ login/route.ts    # Login (sets cookie)
 │   │   └─ logout/route.ts   # Logout (clears cookie)
 ├─ middleware.ts             # Protects routes
lib/
 └─ data.ts                   # Dummy comments data
 ```
 ## Setup

```bash
# Clone the repo
git clone https://github.com/your-username/nextjs-comments-api.git
cd nextjs-comments-api

# Install dependencies
npm install

# Run the dev server
npm run dev
```

## How to Test

You can use Thunder Client, Postman, or curl to test the API.

### 1. Login
```
POST http://localhost:3000/api/login
Content-Type: application/json

{
  "username": "admin",
  "password": "password"
}

```
### 2. Logout
```
POST http://localhost:3000/api/logout
```
### 3. List Comments
```
GET http://localhost:3000/api/comments
```
Example with search:
```
GET http://localhost:3000/api/comments?search=hello
```
### 4. Create a Comment (Requires login)
```
POST http://localhost:3000/api/comments
Content-Type: application/json

{
  "text": "My new comment"
}
```
### 5. Update a Comment (Requires login)
```
PUT http://localhost:3000/api/comments/:id
Content-Type: application/json

{
  "text": "Updated text"
}
```
### 6. Delete a Comment (Requires login)
```
DELETE http://localhost:3000/api/comments/:id
```
