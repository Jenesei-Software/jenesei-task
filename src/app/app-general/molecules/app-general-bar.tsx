import { NavLink } from "react-router-dom";

import "../styles/app-general-bar.css";

export const AppGeneralBar = () => {
  return (
    <div className="AppGeneralBar">
      <div className="AppGeneralBar__Nav">
        <NavLink to={"/project"} className="AppGeneralBar__Nav__Link">
          <svg width="56" height="32" viewBox="0 0 56 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="56" height="32" rx="16" fill="#CCECFF" />
            <mask id="mask0_206_2" maskUnits="userSpaceOnUse" x="16" y="4" width="24" height="24">
              <rect x="16" y="4" width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_206_2)">
              <path d="M20 15V23H24V15H20ZM26 9V23H30V9H26ZM32 17V23H36V17H32ZM36 25H20C19.45 25 18.9792 24.8042 18.5875 24.4125C18.1958 24.0208 18 23.55 18 23V15C18 14.45 18.1958 13.9792 18.5875 13.5875C18.9792 13.1958 19.45 13 20 13H24V9C24 8.45 24.1958 7.97917 24.5875 7.5875C24.9792 7.19583 25.45 7 26 7H30C30.55 7 31.0208 7.19583 31.4125 7.5875C31.8042 7.97917 32 8.45 32 9V15H36C36.55 15 37.0208 15.1958 37.4125 15.5875C37.8042 15.9792 38 16.45 38 17V23C38 23.55 37.8042 24.0208 37.4125 24.4125C37.0208 24.8042 36.55 25 36 25Z" fill="#1E192B" />
            </g>
          </svg>
          <div className="AppGeneralBar__Nav__Link__Title">
            Projects
          </div>
        </NavLink>
      </div>
    </div>
  );
};
