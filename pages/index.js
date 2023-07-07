import BaseLayout from "@/component/layouts/BaseLayout"
import {Container , Button} from "reactstrap"

export default function Home() {
  return (
    <>
      <BaseLayout />
      <Container>
        <Button color="danger">Danger</Button>
      </Container>
    </>
  );
}
