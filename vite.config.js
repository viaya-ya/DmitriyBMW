import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    base: '/DmitriyBMW/',
    plugins: [
        react({
            babel: {
                plugins: ["babel-plugin-styled-components"],
            },
        }),
    ],
    resolve: {
        alias: {
            "@": "/src",
        },
    }
});