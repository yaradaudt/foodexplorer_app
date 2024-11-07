import { createGlobalStyle } from "styled-components"
import {DEVICE_BREAKPOINTS } from "./deviceBreakpoins"

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 16px;
        
        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            font-size: 12px;
        }
    }

    body {
        width: 1440px;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: 'Roboto', serif;
        font-size: 1rem;
        outline: none;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }

    .slick-slide {
        display: flex !important; 
        justify-content: center;
        align-items: center; 
}

    .slick-list {
        overflow: hidden; 
    }

    .slick-track {
        display: flex;
    }

    .slick-prev, .slick-next {
        z-index: 2;
    }


`