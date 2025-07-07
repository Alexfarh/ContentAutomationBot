import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Content Creation Automation",
  description: "Privacy policy for the Content Creation Automation site.",
};

export default function PrivacyPolicy() {
  return (
    <div style={{ maxWidth: 700, margin: "3rem auto", padding: "2rem", background: "var(--background)", color: "var(--foreground)", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>Privacy Policy</h1>
      <p>
        <strong>Last updated:</strong> {new Date().getFullYear()}
      </p>
      <p>
        This is a placeholder privacy policy for the Content Creation Automation site. We are committed to protecting your privacy. As this site develops, we will update this policy to reflect how we collect, use, and safeguard your information.
      </p>
      <h2>Information We Collect</h2>
      <p>
        Currently, this site does not collect any personal information. In the future, if we collect data, we will update this section to explain what information is collected and why.
      </p>
      <h2>Contact</h2>
      <p>
        If you have any questions about this privacy policy, please contact us.
      </p>
    </div>
  );
} 