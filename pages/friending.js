import Styled from "styled-components";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { Hero, SmolText, BodyText } from "../shared/typography";
import Container from "../shared/Container";
import Card from "../shared/Card";
import Button from "../shared/Button";
import { LargeInput, MdInput, SmolInput } from "../shared/TextInput";
import CollegeDropdown from "../components/CollegeDropdown";

const Label = Styled.label`
  margin: 5px 10px;
`;

const Spacer = Styled.div`
  height: 15px;
`;

const FormHeader = Styled.div`
  font-size: 1em;
  font-weight: 500;
`;

export default function Friending() {
  const inProd = process.env.NODE_ENV != "development";
  const [successMsg, setSuccessMsg] = useState("");

  const onSubmit = (data) => {
    fetch("/api/registerFriendingUser", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          console.log(successMsg);
          setSuccessMsg(
            "We've emailed you to verify your @cam.ac.uk address. Check your junk!"
          );
          console.log(successMsg);
        },
        (error) => console.log(error)
      );
  };

  const [displayMatchedWith, setDisplayMatchedWith] = useState(false);

  const { handleSubmit, register, errors, control } = useForm();

  const nbInput = (i) => {
    setDisplayMatchedWith(i.target.value.length > 0);
  };

  return (
    <Container>
      <Hero>Friending Sign Up</Hero>
      <Card>
        <form onSubmit={handleSubmit(onSubmit)}>
          <LargeInput
            placeholder="Full Name"
            name="name"
            ref={register({ required: inProd })}
          />
          <SmolInput
            placeholder="CRSID"
            name="crsid"
            ref={register({ required: inProd, maxLength: 6 })}
          />
          <MdInput
            placeholder="Year you were born in"
            type="number"
            name="yearOfBirth"
            ref={register({ required: inProd, min: 1992, max: 2005 })}
          />
          <Spacer />
          <CollegeDropdown
            ref={register({ validate: (value) => value != "selectcollege" })}
          />
          <Spacer />
          <LargeInput
            placeholder="How to say hi"
            name="contact"
            ref={register({ required: inProd })}
          />
          <SmolText>
            Eg. "Whatsapp me on 0123456789" or "I'm Stephen Toope on fb"
          </SmolText>
          <br />

          <Spacer />
          <FormHeader>Exclude matches from your college? </FormHeader>
          <Label>
            <input
              name="excludeCollege"
              type="checkbox"
              defaultChecked={true}
              ref={register}
            />
            <BodyText>Yes</BodyText>
          </Label>
          <Spacer />
          <Button type="submit">Sign Up</Button>

          <Spacer />
          <SmolText>
            By signing up you agree that you this data has to be stored, and
            that's cool
          </SmolText>
        </form>
        <Spacer />
        {successMsg.length > 0 && <BodyText>{successMsg}</BodyText>}
      </Card>
    </Container>
  );
}