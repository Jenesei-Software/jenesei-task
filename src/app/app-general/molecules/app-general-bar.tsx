import { useLocation, useNavigate } from "react-router-dom";

import "../styles/app-general-bar.css";

import { pathName } from "@stores/path-name";
import { UserInterface } from "@icons/user-interface/user-interface";

export const AppGeneralBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="AppGeneralBar">
      <div className="AppGeneralBar__Nav">
        <UserInterface.JeneseiTaskIcon />
        <UserInterface.LayersBar
          onCLick={() => navigate(`/${pathName.group.title}`)}
          active={location.pathname.startsWith(`/${pathName.group.title}`)}
          title={pathName.group.title}
        />
        <UserInterface.BrowserBar
          onCLick={() => navigate(`/${pathName.project.title}`)}
          active={location.pathname.startsWith(`/${pathName.project.title}`)}
          title={pathName.project.title}
        />
        <UserInterface.CalendarBar
          onCLick={() => navigate(`/${pathName.calendar.title}`)}
          active={location.pathname.startsWith(`/${pathName.calendar.title}`)}
          title={pathName.calendar.title}
        />
        <UserInterface.TimeCircleBar
          onCLick={() => navigate(`/${pathName.time.title}`)}
          active={location.pathname.startsWith(`/${pathName.time.title}`)}
          title={pathName.time.title}
        />
        <UserInterface.ChartBar
          onCLick={() => navigate(`/${pathName.statistics.title}`)}
          active={location.pathname.startsWith(`/${pathName.statistics.title}`)}
          title={pathName.statistics.title}
        />
      </div>
    </div>
  );
};
