import React, { useState, useEffect } from "react";
import HamburgerMenu from "react-hamburger-menu";

import { HeaderBar, Nav, BurgerArea, Logo } from "./Style";

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <HeaderBar>
      <a href="/">
        <Logo>MNP</Logo>
      </a>
      {(!isSmallScreen || isNavVisible) && (
        <Nav>
          <a href="https://docs.google.com/forms/d/1Jb-T_Nvq6iNfuhLe4QU96ECnUfJeWb1q-om-fr3EOjg">
            Dating
          </a>
          <a href="https://docs.google.com/forms/d/14Yh-DZvoJ5dzi1Dj66-cJzY7YQpx9eyz8OwDilYYpTY">
            Friending
          </a>
          {/* <a href="/">Networking</a> */}
        </Nav>
      )}
      <BurgerArea>
        <HamburgerMenu
          isOpen={isNavVisible}
          menuClicked={toggleNav}
          width={25}
          height={20}
          strokeWidth={1}
          rotate={0}
          color="black"
          borderRadius={0}
          animationDuration={0.5}
        />
      </BurgerArea>
    </HeaderBar>
  );
}
