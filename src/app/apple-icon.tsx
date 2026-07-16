import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: 180,
                    height: 180,
                    borderRadius: "40px",
                    background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "monospace",
                    fontSize: 72,
                    fontWeight: 700,
                    color: "#fff",
                    letterSpacing: "-2px",
                }}
            >
                NR
            </div>
        ),
        { ...size }
    );
}
