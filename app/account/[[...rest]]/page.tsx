import { UserProfile } from "@clerk/nextjs";

// Catch-all route: <UserProfile /> manages its own internal
// navigation (profile / security / API Keys tabs) under this prefix.
export default function AccountPage() {
  return (
    <main style={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
      <UserProfile path="/account" routing="path" />
    </main>
  );
}
