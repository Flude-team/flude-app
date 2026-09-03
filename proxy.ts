import { clerkMiddleware } from "@clerk/nextjs/server";

// Auth checks now live per-page (see app/account/.../page.tsx) per Clerk's
// resource-based auth guidance -- this just makes Clerk's auth() available
// to the rest of the app, it does not gate any route itself.
export default clerkMiddleware();

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
