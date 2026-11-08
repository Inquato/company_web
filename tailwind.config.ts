import type { Config } from "tailwindcss";
export default { content: ["./src/**/*.{ts,tsx}"], theme: { extend: {
  colors: { ink: "#111111", mute: "#666666", brand: { DEFAULT: "#2166D0", dark: "#1853A8", soft: "#EAF1FD" } },
  fontFamily: { sans: ["var(--font-inter)", "system-ui", "sans-serif"] } } }, plugins: [] } satisfies Config;
