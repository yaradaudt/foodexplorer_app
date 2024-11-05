import { FiMinus, FiPlus } from "react-icons/fi"
import { Container } from "./styles"

export function NumberVar({ number, setNumber }) {
    const incrementNumber = () => {
        setNumber(prev => prev + 1);
    }
    const decrementNumber = () => {
        setNumber(prev => (prev > 1 ? prev -1 : 1))
    }
    
    return (
        <Container>
            <button onClick={decrementNumber}><FiMinus/></button>
            <span>{number}</span>
            <button onClick={incrementNumber}><FiPlus /></button>
        </Container>
    )
}