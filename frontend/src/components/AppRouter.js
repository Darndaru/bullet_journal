import React, {useContext} from 'react';
import {Routes, Route} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes"
import {Context} from "../index";

const AppRouter = () => {
  const {user} = useContext(Context)
  const isAuth = false

  console.log(user)
  return (
    <Routes>
      {isAuth && privateRoutes.map(({path, Component}) =>
        <Route path={path} element={Component} key={"private"}/>)
      }
      {publicRoutes.map(({path, Component}) =>
        <Route path={path} element={Component} key={"public"} />)
      }
    </Routes>
  );
};

export default AppRouter;