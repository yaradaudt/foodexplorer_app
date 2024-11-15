import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoins";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  > button {
    margin-top: 8rem;
    padding-left: 6rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      padding-left: 5rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      padding-left: 4rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      padding-left: 2rem;
      margin-top: 6rem;
      font-size: 1.5rem;

      svg {
        font-size: 2rem;
      }
    }
  }
`;

export const AddDishWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 5rem 1.5rem 6rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 1.5rem 4rem 1.5rem 5rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 1.5rem 3rem 1.5rem 4rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding: 1.5rem 2rem;
  }

  > h1 {
    font-family: "Poppins", sans-serif;
    font-size: 2rem;
    font-weight: 600;
    padding-bottom: 2rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      font-size: 1.5rem;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Label = styled.p`
  font-family: "Roboto", serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  padding-bottom: 1rem;
  text-align: left;
`;

export const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    flex-direction: column;
  }
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FileLabel = styled.label`
  display: flex;
  align-items: center;
  height: 3rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  font-family: "Poppins", sans-serif;
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
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
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
`;

export const MidSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    flex-direction: column;
  }
`;

export const MidWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const IngredientsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0.1rem 0.5rem;
  gap: 0.8rem;
  min-height: 3rem;
  height: auto;
  width: 60rem;
  box-sizing: border-box;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border: none;
  border-radius: 5px;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 48rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    width: 100%;
  }
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

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
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    justify-content: center;
  }

  > button {
    background-color: ${({ theme }) => theme.COLORS.RED_400};

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    width: 100%;
    }
  }
`;
