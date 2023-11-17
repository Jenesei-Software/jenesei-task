import { useLocation, useNavigate } from "react-router-dom";

import { pathName } from "@stores/path-name";
import { UserInterface } from "@icons/user-interface/user-interface";
import { StyleAppGeneralBar, StyleAppGeneralBarNav } from "./app-general-bar.styles";

export const AppGeneralBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <StyleAppGeneralBar>
      <StyleAppGeneralBarNav>
        <UserInterface.JeneseiTaskIcon />
        <UserInterface.LayersBar
          onClick={() => navigate(`/${pathName.group.title}`)}
          active={location.pathname.startsWith(`/${pathName.group.title}`)}
          title={pathName.group.title}
        />
        <UserInterface.BrowserBar
          onClick={() => navigate(`/${pathName.project.title}`)}
          active={location.pathname.startsWith(`/${pathName.project.title}`)}
          title={pathName.project.title}
        />
        <UserInterface.CalendarBar
          onClick={() => navigate(`/${pathName.calendar.title}`)}
          active={location.pathname.startsWith(`/${pathName.calendar.title}`)}
          title={pathName.calendar.title}
        />
        <UserInterface.TimeCircleBar
          onClick={() => navigate(`/${pathName.time.title}`)}
          active={location.pathname.startsWith(`/${pathName.time.title}`)}
          title={pathName.time.title}
        />
        <UserInterface.ChartBar
          onClick={() => navigate(`/${pathName.statistics.title}`)}
          active={location.pathname.startsWith(`/${pathName.statistics.title}`)}
          title={pathName.statistics.title}
        />
      </StyleAppGeneralBarNav>
    </StyleAppGeneralBar>
  );
};
