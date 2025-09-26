export type Comment = {
  id: number;
  text: string;
};

export const comments: Comment[] = [
  { id: 1, text: "Hello, Next.js is awesome!" },
  { id: 2, text: "Route Handlers make it full-stack." },
];