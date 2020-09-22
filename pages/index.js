import Link from "next/link";
import Styled from "styled-components";
import Head from "next/head";
import { FaArrowRight } from "react-icons/fa";

import { Hero, H1, H2, Subtitle } from "../shared/typography";
import Container from "../shared/Container";
import Card from "../shared/Card";
import Button from "../shared/Button";

const Spacer = Styled.div`
  height: 10px;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Meet New People</title>
      </Head>
      <Container>
        <Hero>It's hard to meet new people at Cambridge during Covid.</Hero>
        <H2>We'll email you with a random match about once a week.</H2>

        <br />

        <Card>
          <Subtitle>Sign up for one or all of the categories.</Subtitle>

          <H1>Friending</H1>
          <Subtitle>Grow your friendship circles</Subtitle>
          <a
            target="_blank"
            href="https://docs.google.com/forms/d/14Yh-DZvoJ5dzi1Dj66-cJzY7YQpx9eyz8OwDilYYpTY"
          >
            <Button>
              Friending Sign Up <FaArrowRight />
            </Button>
          </a>

          <H1>Dating</H1>
          <Subtitle>
            Once we've put you in touch you can meet up how you want, we suggest
            grabbing a coffee
          </Subtitle>
          <a
            target="_blank"
            href="https://docs.google.com/forms/d/1Jb-T_Nvq6iNfuhLe4QU96ECnUfJeWb1q-om-fr3EOjg"
          >
            <Button>
              Dating Sign Up <FaArrowRight />
            </Button>
          </a>

          <H1>Networking</H1>
          <Subtitle>
            Meet people to chat about careers, startups & business
          </Subtitle>
          {/* <a href="/networking"> */}
          <Button>Coming Soon!</Button>
          {/* </a> */}
          <Spacer />
        </Card>

        <Spacer />

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
          <Subtitle>Just click the link at the bottom of any email.</Subtitle>
          <br />

          <H2>Anything else</H2>
          <Subtitle>
            Email meetnewpeopleatcam [at] gmail [dot] com with any questions,
            problems, or feedback.
          </Subtitle>

          <Spacer />
        </Card>
      </Container>
    </>
  );
}
