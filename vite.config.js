import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Twittfake",
  plugins: [react()],
  test: {
    environment: "happy-dom",
  },
});
