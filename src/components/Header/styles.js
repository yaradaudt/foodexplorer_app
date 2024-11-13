import styled from 'styled-components'

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    padding: 0 6rem;

    width: 100%;
    height: 6rem;

    border: none;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    .cartButton {
        width: 13rem;
        height: 3.5rem;
        margin: auto 0 auto 2rem;
        display: flex;
        flex-shrink: 0;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        > svg {
            font-size: 2rem;
        }
    }

`

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 0;
    gap: 2.5rem;
    flex: 1;
    margin: 0 auto;

    a, img, .cartButton {
        font-size: 1rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        flex-shrink: 0;

    }

`

export const LogOut = styled.button`
    display: flex;
    align-items: center;
    border: none;
    background: none;
    margin-left: 2rem;

    > svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 1.5rem;
        
    }

`