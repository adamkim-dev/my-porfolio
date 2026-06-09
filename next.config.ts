import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Pin the workspace root to this project so Turbopack isn't confused by
    // a stray package-lock.json in a parent directory.
    root: __dirname,
    ignoreIssue: [
      // Prevent Turbopack from panicking on the codegraph daemon socket file.
      { path: "**/.codegraph/**" },
    ],
  },
};

export default nextConfig;
