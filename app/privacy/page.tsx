import fs from "fs";
import path from "path";
import { marked } from "marked";

export default async function PrivacyPage() {
  const filePath = path.join(process.cwd(), "content", "legal", "privacy-policy.md");
  const markdown = fs.readFileSync(filePath, "utf8");
  
  // marked.parse returns string synchronously when no async extensions are used
  const htmlContent = await marked.parse(markdown);

  return (
    <>
      {/* globals.css resets `a { color: inherit; text-decoration: none }` site-wide;
          other pages override it per-link via inline styles, which isn't possible for
          markdown-generated links, so scope the override to this page's content instead. */}
      <style>{".privacy-content a { color: #2563eb; text-decoration: underline; }"}</style>
      <main
        className="privacy-content"
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          gap: "1rem",
          padding: "2rem",
          maxWidth: "600px",
          margin: "0 auto",
          lineHeight: "1.6",
        }}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </>
  );
}
