import { ImageResponse } from "next/og";
import { APPROVALS_COUNT, SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0b1f3a 0%, #13366b 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 30,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#00d2ff",
          }}
        >
          Visa Consulting
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 800,
            lineHeight: 1.1,
            marginTop: 24,
            maxWidth: 940,
          }}
        >
          Expert Visa Consulting, With Doorstep Filing
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "rgba(255,255,255,0.75)",
            marginTop: 28,
            maxWidth: 900,
          }}
        >
          USA · Canada · UK · Schengen · Australia — our counselor visits you,
          anywhere in Tamil Nadu.
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
            marginTop: 48,
            fontSize: 28,
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "12px 28px",
              borderRadius: 999,
              background: "#1d4ed8",
              fontWeight: 700,
            }}
          >
            {SITE_NAME}
          </div>
          <div style={{ display: "flex", color: "rgba(255,255,255,0.7)" }}>
            {APPROVALS_COUNT} approvals · 40+ destinations
          </div>
        </div>
      </div>
    ),
    size,
  );
}
