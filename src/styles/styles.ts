import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`
    :root {
        --bg-page: #f5f3ee;
        --bg-elevated: #ffffff;
        --bg-soft: #efece4;
        --bg-ink: #0a0d14;
        --text-primary: #0c1322;
        --text-secondary: #4b556b;
        --text-muted: #6c7891;
        --brand: #1f3df0;
        --brand-strong: #1a31bc;
        --line: rgba(14, 22, 45, 0.09);
        --line-strong: rgba(14, 22, 45, 0.16);
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
        color: var(--text-primary);
        letter-spacing: -0.015em;
    }

    p {
        line-height: 1.65;
        letter-spacing: 0.005em;
        color: var(--text-secondary);
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ::selection {
        background: rgba(31, 61, 240, 0.18);
        color: var(--text-primary);
    }

    @keyframes marquee {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
    }

    @keyframes rise {
        from {
            opacity: 0;
            transform: translateY(14px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
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
