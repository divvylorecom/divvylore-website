import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`
    :root {
        --bg-page: #0a0b16;
        --bg-card: rgba(28, 32, 58, 0.52);
        --bg-card-solid: #12152a;
        --bg-soft: rgba(255, 255, 255, 0.06);
        --bg-ink: #ffffff;
        --text-primary: #f5f7ff;
        --text-secondary: rgba(232, 238, 255, 0.86);
        --text-muted: rgba(220, 226, 255, 0.58);
        --accent: #8b5cf6;
        --accent-strong: #7c3aed;
        --accent-soft: rgba(139, 92, 246, 0.22);
        --accent-2: #2dd4bf;
        --accent-2-soft: rgba(45, 212, 191, 0.18);
        --accent-3: #f472b6;
        --glow-indigo: rgba(99, 102, 241, 0.42);
        --glow-violet: rgba(168, 85, 247, 0.4);
        --glow-teal: rgba(45, 212, 191, 0.3);
        --glow-rose: rgba(244, 114, 182, 0.28);
        --glow-blue: rgba(96, 165, 250, 0.3);
        --line: rgba(255, 255, 255, 0.14);
        --line-strong: rgba(255, 255, 255, 0.24);
        --radius-sm: 12px;
        --radius-md: 20px;
        --radius-card: 36px;
        --font-sans: 'DM Sans', sans-serif;
        --font-serif: 'Instrument Serif', serif;
        --header-offset: 5.25rem;
        --shadow-card: 0 30px 80px -36px rgba(0, 0, 0, 0.65),
            inset 0 1px 0 rgba(255, 255, 255, 0.14);
        --glass-bg: linear-gradient(
            165deg,
            rgba(255, 255, 255, 0.12) 0%,
            rgba(139, 92, 246, 0.08) 32%,
            rgba(14, 18, 40, 0.78) 100%
        );
        /* Agents palette: indigo → violet → rose, with glass rim + bloom */
        --cta-gradient: linear-gradient(
            105deg,
            #4f46e5 0%,
            #7c3aed 38%,
            #a855f7 68%,
            #f472b6 100%
        );
        --cta-glow: 0 0 0 1px rgba(255, 255, 255, 0.22),
            inset 0 1px 0 rgba(255, 255, 255, 0.42),
            inset 0 -1px 0 rgba(79, 70, 229, 0.25),
            0 0 18px rgba(99, 102, 241, 0.45),
            0 0 36px rgba(168, 85, 247, 0.4),
            0 10px 28px -8px rgba(244, 114, 182, 0.55);
        --cta-glow-hover: 0 0 0 1px rgba(255, 255, 255, 0.32),
            inset 0 1px 0 rgba(255, 255, 255, 0.5),
            inset 0 -1px 0 rgba(79, 70, 229, 0.2),
            0 0 22px rgba(99, 102, 241, 0.55),
            0 0 48px rgba(168, 85, 247, 0.5),
            0 12px 32px -6px rgba(244, 114, 182, 0.65);
    }

    html,
    body,
    a,
    button,
    input,
    textarea {
        font-family: var(--font-sans);
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
        font-family: var(--font-sans);
        margin: 0;
        color: var(--text-primary);
        letter-spacing: -0.04em;
    }

    p {
        line-height: 1.65;
        color: var(--text-secondary);
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ::selection {
        background: rgba(139, 92, 246, 0.4);
        color: #ffffff;
    }

    @keyframes stack-exit {
        from {
            transform: scale(1);
            filter: brightness(1);
        }
        to {
            transform: scale(0.95);
            filter: brightness(0.82);
        }
    }

    @keyframes liquid-shift {
        0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
        }
        50% {
            transform: translate3d(2%, -1.5%, 0) scale(1.04);
        }
    }

    @media (prefers-reduced-motion: reduce) {
        html {
            scroll-behavior: auto;
        }

        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    }
`;
