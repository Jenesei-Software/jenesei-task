import { Outlet } from "react-router-dom";

import { AppGeneralBar } from "../molecules/app-general-bar";

import { StyleAppGeneral, StyleAppGeneralOutlet } from "./app-general.styles";

export const AppGeneral = () => {
  return (
    <StyleAppGeneral>
      <AppGeneralBar />
      <StyleAppGeneralOutlet>
        <Outlet />
      </StyleAppGeneralOutlet>
    </StyleAppGeneral>
  );
};
