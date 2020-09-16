import Styled from "styled-components";
import Link from "next/link";
import { Hero, Subtitle } from "../shared/typography";
import Container from "../shared/Container";
import Button from "../shared/Button";

const NarrowHero = Styled(Hero)`
  /* max-width: 700px;  */
`;

export default function Home() {
  return (
    <Container>
      <NarrowHero>
        It's hard to meet new people at Cambridge during Covid.
      </NarrowHero>
      <Subtitle>
        We'll automatically match you with someone random about once a week.
      </Subtitle>

      <Link href="/dating">
        <Button>Sign Up</Button>
      </Link>
    </Container>
  );
}
