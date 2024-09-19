import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    > button {
        margin-top: 8rem;
        padding-left: 7.6rem;
    }
`

export const AddDishWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.5rem 7.6rem;

    > h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 2rem;
        font-weight: 600;
        padding-bottom: 2rem;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;

`

export const Label = styled.p`
    font-family: 'Roboto', serif;
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    padding-bottom: 1rem;
    text-align: left;
`

export const TopSection = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;

`

export const TopWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const FileLabel = styled.label`
    display: flex;
    align-items: center;
    height: 3rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    padding: 0.75rem 1.5rem;
    border-radius: 5px;
    gap: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
    border: none;   

    svg {
        font-size: 1.5rem;
    }

    &:hover {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
`;

export const CustomFileInput = styled.input`
    display: none;
`;

export const FileNameDisplay = styled.p`
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
`;

export const Select = styled.select`
    padding: 0.75rem 0.85rem;
    height: 3rem;
    border-radius: 5px;
    border: none;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 1rem;


    &:focus {
        outline: none;
        border: none;
    }

    option {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }

`

export const MidSection = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;

`
export const MidWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    
`
export const IngredientsWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 3rem;
    width: 56rem;
    box-sizing: border-box;    
    padding: 0.75rem 0.85rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border: none;
    border-radius: 5px;
`
export const BtnAddIngredient = styled.button`
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
    margin-right: 0.75rem;
    border-radius: 0.3rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    background-color: transparent;
    border: 1px dashed;

    svg {
        margin-left: 0.5rem;
        align-items: center;
    }

    &:hover {
        filter: brightness(0.8);
    }
`

export const BottomSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    
`
export const Textarea = styled.textarea`
    height: 10.75rem;
    box-sizing: border-box;    
    padding: 0.75rem 0.85rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border: none;
    border-radius: 5px;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
`

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 2rem;

    .save-dish {
        background-color: ${({ theme }) => theme.COLORS.RED_400};
    }

    .delete-dish {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
`