import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: "autoUpdate",

      includeAssets: [
        "favicon.ico",
        "apple-touch-icon.png",
        "masked-icon.svg"
      ],

      manifest: {
        name: "CELE OS",
        short_name: "CELE OS",

        description:
          "Civil Engineering Licensure Examination Productivity Operating System",

        theme_color: "#5D4037",
        background_color: "#F8F5F2",

        display: "standalone",

        orientation: "portrait",

        start_url: "/",

        scope: "/",

        icons: [
          {
            src: "/icon-192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/icon-512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/icon-512.png",
            sizes: "512x512",
            purpose: "any maskable",
            type: "image/png"
          }
        ]
      },

      workbox: {
        cleanupOutdatedCaches: true,

        clientsClaim: true,

        skipWaiting: true,

        globPatterns: [
          "**/*.{js,css,html,png,svg,ico,json}"
        ]
      }

    })

  ]
});
VitePWA({
  registerType: "autoUpdate",

  includeAssets: [
    "favicon.ico",
    "apple-touch-icon.png",
    "masked-icon.svg",
  ],

  manifest: {
    name: "CELE OS",
    short_name: "CELE OS",
    description:
      "Civil Engineering Licensure Examination Productivity Operating System",

    theme_color: "#5D4037",
    background_color: "#F8F5F2",

    display: "standalone",
    orientation: "portrait",
    start_url: "/",
    scope: "/",

    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        purpose: "any maskable",
        type: "image/png",
      },
    ],
  },

  workbox: {
    cleanupOutdatedCaches: true,
    clientsClaim: true,
    skipWaiting: true,
    globPatterns: ["**/*.{js,css,html,png,svg,ico,json}"],
  },

  devOptions: {
    enabled: true,
  },
})