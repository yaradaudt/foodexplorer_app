import { Container } from  './styles';

export function IngredientsTags({ title, ...rest }) {
  return (
    <Container {...rest}>
      {title}
    </Container>
  )
}