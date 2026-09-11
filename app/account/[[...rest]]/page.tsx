import { auth } from "@clerk/nextjs/server";
import { UserProfile } from "@clerk/nextjs";

import Link from "next/link";

// Catch-all route: <UserProfile /> manages its own internal
// navigation (profile / security / API Keys tabs) under this prefix.
export default async function AccountPage() {
  await auth.protect();

  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem", padding: "2rem" }}>
      <UserProfile path="/account" routing="path" />
      <Link href="/privacy" style={{ color: "#2563eb", fontSize: "0.9rem" }}>
        Privacy Policy
      </Link>
    </main>
  );
}
