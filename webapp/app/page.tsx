'use client';
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "var(--background)", color: "var(--foreground)" }}>
      <main style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Content Creation Automation</h1>
        <p style={{ fontSize: "1.25rem", marginBottom: "2rem" }}>
          Welcome! This site will soon help you automate your content creation workflows.<br />
          Stay tuned for updates.
        </p>
        <Link href="/privacy-policy" className="privacy-btn-link">
          <button className="privacy-btn">
            Privacy Policy
          </button>
        </Link>
      </main>
    </div>
  );
}
