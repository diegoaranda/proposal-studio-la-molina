import { ImageResponse } from "next/og";

export const alt = "Cada flor cuenta una historia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#faf7f2",
          color: "#303629",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "72px",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "flex-start",
            background: "#ffffff",
            border: "1px solid #e9e2d9",
            borderRadius: "32px",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            padding: "64px",
            width: "100%",
          }}
        >
          <div style={{ color: "#4e5835", display: "flex", fontSize: 27, letterSpacing: "0.18em" }}>
            LA MOLINA FLORERÍA
          </div>
          <div style={{ color: "#4e5835", display: "flex", fontSize: 72, lineHeight: 1.02 }}>
            Cada flor cuenta una historia
          </div>
          <div style={{ display: "flex", fontSize: 30 }}>Imaginemos el siguiente capítulo de La Molina Florería, Karen.</div>
          <div style={{ background: "#d98d91", borderRadius: "999px", display: "flex", height: 10, width: 180 }} />
        </div>
      </div>
    ),
    size,
  );
}
