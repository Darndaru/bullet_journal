import React, {useContext} from 'react';
import {Context} from "../index";
import {Link} from "react-router-dom";
import {COLLECTION_ROUTE, DAILY_ROUTE, FUTURE_ROUTE, LOGIN_ROUTE, MONTHLY_ROUTE} from "../utils/consts";

const Header = () => {
  const {user} = useContext(Context)
  let month = new Date().toLocaleString("en-US", { month: "long" });

  return (
    <header>
      <Link to={DAILY_ROUTE} className={"headerLink"}>B U L L E T</Link>
      <nav>
        <Link to={MONTHLY_ROUTE} className={"headerLink"}>{month}</Link>
        <Link to={FUTURE_ROUTE} className={"headerLink"}>Future log</Link>
        <Link to={COLLECTION_ROUTE} className={"headerLink"}>Collections</Link>
      </nav>
      {
        user.isAuth ?
          <p className={"headerLink"}>{user.name}</p>
          :
          <Link to={LOGIN_ROUTE} className={"headerLink"}>Sign in</Link>
      }
    </header>
  );
};

export default Header;