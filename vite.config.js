import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  base: "/task-manager/", // repo name
  plugins: [react()]
})