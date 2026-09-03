import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        gap: "1rem",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1>Flude account</h1>
      <p>Sign in and create an API key to use with the Flude GitHub Action.</p>
      <Link href="/account">Go to your account</Link>
    </main>
  );
}
