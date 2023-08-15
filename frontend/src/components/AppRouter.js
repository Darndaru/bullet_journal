import React, {useContext} from 'react';
import {Routes, Route} from "react-router-dom";
import {publicRoutes} from "../routes"
import {Context} from "../index";

const AppRouter = () => {
  const {user} = useContext(Context)

  console.log(user)
  return (
    <Routes>
      {publicRoutes.map(({path, Component}) =>
        <Route path={path} element={Component} />)
      }
    </Routes>
  );
};

export default AppRouter;