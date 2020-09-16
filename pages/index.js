import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import { Hero, H1, H2, Subtitle } from "../shared/typography";
import Container from "../shared/Container";
import Card from "../shared/Card";
import Button from "../shared/Button";

export default function Home() {
  return (
    <Container>
      <Hero>It's hard to meet new people at Cambridge during Covid.</Hero>
      <H2>
        We'll automatically match you with someone random about once a week.
      </H2>

      <br />

      <Card>
        <Subtitle>Sign up for one or all of the categories.</Subtitle>

        <H1>Friending</H1>
        <Subtitle>Grow your friendship circles</Subtitle>
        <Link href="/friending">
          <Button>
            Friending Sign Up <FaArrowRight />
          </Button>
        </Link>

        <H1>Dating</H1>
        <Subtitle>
          Once we've put you in touch you can meet up how you want, we suggest
          grabbing a coffee
        </Subtitle>
        <Link href="/dating">
          <Button>
            Dating Sign Up <FaArrowRight />
          </Button>
        </Link>

        <H1>Networking</H1>
        <Subtitle>
          Meet people to chat about careers, startups & business
        </Subtitle>
        {/* <Link href="/networking"> */}
        <Button>Coming Soon!</Button>
        {/* </Link> */}
      </Card>

      <Card>
        <H1>FAQs</H1>

        <H2>Who can sign up?</H2>
        <Subtitle>
          This is purely for Cambridge University students. You must have a
          @cam.ac.uk email to sign up.
        </Subtitle>
        <br />

        <H2>How often will I be matched?</H2>
        <Subtitle>About once a week</Subtitle>
        <br />

        <H2>Is it easy to unsubscribe if I want to?</H2>
        <Subtitle>Just click the link at the bottom of an email.</Subtitle>
        <br />

        <H2>Anything else</H2>
        <Subtitle>
          Email meetnewpeopleatcam [at] gmail [dot] com with any questions,
          problems, or feedback.
        </Subtitle>
      </Card>
    </Container>
  );
}
