import { Container } from "./styles";

export function Input({ title, icon: Icon, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={"1.5rem"} />}
      <input {...rest} />
    </Container>
  );
}