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
        maxWidth: "560px",
        margin: "0 auto",
      }}
    >
      <h1>Flude account</h1>
      <p>
        Flude automatically generates API reference documentation for your
        codebase, in multiple languages and output formats, straight from
        your CI pipeline.
      </p>
      <p>
        Flude is still in development. This page exists solely to sign in
        and create an API key to use with the Flude GitHub Action (or the
        GitLab CI / Bitbucket Pipe equivalents).
      </p>
      <Link
        href="/account"
        style={{
          marginTop: "0.5rem",
          padding: "0.75rem 1.5rem",
          borderRadius: "6px",
          backgroundColor: "#171717",
          color: "#fff",
          fontWeight: 600,
          textDecoration: "none",
        }}
      >
        Go to your account
      </Link>
      <p style={{ marginTop: "1.5rem", fontSize: "0.9rem" }}>
        Follow progress on the{" "}
        <a
          href="https://blog.flude.guide"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#2563eb" }}
        >
          Flude blog
        </a>
        .
      </p>
    </main>
  );
}
