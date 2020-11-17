import React from "react";

import {
  withNavigationContext,
  Link
} from "../../../node_modules/react-awesome-slider/dist/navigation";
import "./nav.scss";
const Nav = withNavigationContext(({ fullpage }) => {
  const { slug } = fullpage.navigation;

  return (
    <header className="page-header">
      <div className="page-header__wrapper">
        <div className="page-header__title">
        </div>
        <nav>
          <Link className={slug === "" ? "selected" : null} href="/">
            Staci Shon
          </Link>
          <Link
            className={slug === "page-two" ? "selected" : null}
            href="/page-two"
          >
            Portfolio
          </Link>
          <Link
          className={slug === "page-three" ? "selected" : null}
          href="/page-three"
          >
          Talk to me
          </Link>
        </nav>
      </div>
    </header>
  );
});

export default Nav;
