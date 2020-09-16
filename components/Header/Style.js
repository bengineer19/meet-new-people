import Styled from "styled-components";

export const HeaderBar = Styled.div`
  position: fixed;
  top: 0;
  max-height: 70px;
  width: 100vw;

  display: grid;
  grid-template-areas: "logo nav";

  /* background-color: #fff; */
  background-color: #F3F8FE;
  /* background-color: #f9f9f9; */
  /* box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.2); */

  @media (max-width: 700px) {
  grid-template-areas: "logo burger" "nav nav";
  }
`;

export const Nav = Styled.div`
  display: grid;
  grid-area: nav;
  grid-template-columns: repeat(4, auto);
  align-items: center;
  justify-items: center;

  a {
    color: #11111;
    font-size: 20px;
    font-weight: 400;
    transition: 0.35s;
    text-decoration: none;
  }
  a:hover {
    transform: scale(1.15);
  }

  @media (max-width: 700px) {
    grid-template-rows: repeat(4, auto);
    grid-template-columns: none;
    grid-row-gap: 20px;

    padding: 30px 0 30px;
    /* background: rgba(40, 44, 47, 0.95); */
    background: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export const BurgerArea = Styled.div`
  grid-area: burger;
  display: none;
  align-items: center;
  justify-items: center;
  margin: 0 20px 0 0;
  justify-self: end;

  @media (max-width: 700px) {
    display: grid;
  }
`;

export const Logo = Styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-area: logo;

  height: 70px;
  color: #111;
  font-size: 2em;
  font-family: serif;
}`;
