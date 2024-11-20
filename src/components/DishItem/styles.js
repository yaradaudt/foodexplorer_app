import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.LIGHT_600};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme. COLORS.LIGHT_500}`: "none"};
    border-radius: 0.5rem;

    > button {
        display: flex;
        margin-right: 0.5rem;
        border: none;
        background: none;
        align-items: center;
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    .dish-item-input {
        text-align: center;
        padding: 0.5rem;
        width: 8rem;
        max-width: auto;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background: transparent;

        border: none;
        cursor: ${({ isNew }) => isNew ? "text" : "default"};

        &:hover {
            filter: brightness(0.9);
        }

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }
`