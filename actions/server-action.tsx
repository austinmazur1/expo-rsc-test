// Server function RSF
"use server"; //Similar to Next.js
// This runs on server!
// WE can couple this more tightly with our app than api route
// Not bundled with our react native application

// Server actions are essentially api routes with typescript coupling to our code
export async function myAction(counter: number) {
  return counter + 1;
}
