"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[global error]", error);
  }, [error]);

  // Replaces the root layout, so this cannot rely on globals.css loading.
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: "system-ui, sans-serif",
          display: "flex",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          margin: 0,
          padding: "24px",
          background: "#f8fafc",
          color: "#0b1f3a",
        }}
      >
        <div style={{ maxWidth: "32rem", textAlign: "center" }}>
          <h1 style={{ fontSize: "1.75rem", margin: "0 0 12px" }}>
            Something went wrong
          </h1>
          <p style={{ margin: "0 0 24px", lineHeight: 1.6 }}>
            Sorry — the site hit an unexpected error. Please try again, or call
            us on{" "}
            <a href="tel:+916369153144" style={{ color: "#1d4ed8" }}>
              +91 63691 53144
            </a>
            .
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              background: "#0b1f3a",
              color: "#fff",
              border: 0,
              borderRadius: "8px",
              padding: "12px 24px",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
