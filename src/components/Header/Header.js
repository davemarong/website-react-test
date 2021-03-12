import React from "react";
import Nav from "./Nav";
import Logo from "./Logo";
export default function Header() {
  return (
    <>
      <header className="header">
        <Nav />
        <Logo />
      </header>
    </>
  );
}
