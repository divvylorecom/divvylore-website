import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`
    :root {
        --bg-page: #f7f9ff;
        --text-primary: #111f42;
        --text-secondary: #4a5a82;
    }

    html,
    body,
    a,
    button,
    input,
    textarea {
        font-family: 'Manrope', sans-serif;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        padding: 0;
        border: 0;
                background: var(--bg-page);
        color: var(--text-primary);
        overflow-x: hidden;
        min-height: 100vh;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    }

    * {
        box-sizing: border-box;
    }

    img,
    svg,
    video {
        max-width: 100%;
        height: auto;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Space Grotesk', sans-serif;
        margin: 0;
    }

    p {
        line-height: 1.6;
        letter-spacing: 0.01em;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ::selection {
        background: rgba(135, 190, 255, 0.35);
        color: #ffffff;
    }

    @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }
`;
