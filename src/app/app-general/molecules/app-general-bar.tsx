import { NavLink } from "react-router-dom";

import "../styles/app-general-bar.css";

import { pathName } from "../../path-name";

export const AppGeneralBar = () => {
  return (
    <div className="AppGeneralBar">
      <div className="AppGeneralBar__Nav">
        <NavLink
          to={`/${pathName.group.title}`}
          title={pathName.group.title}
          className={({ isActive }) =>
            isActive
              ? "Icon__Bar__Button--active Icon__Bar__Button"
              : "Icon__Bar__Button--non-active Icon__Bar__Button"
          }
        >
          <svg
            className="Icon__Bar__Button__SVG"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              className="Icon__Bar__Button__SVG__Path"
              d="M14.6198 1.93606C12.9917 1.02131 11.0083 1.02131 9.38018 1.93606L3.34356 5.32762C1.88548 6.14682 1.88548 8.25428 3.34356 9.07348L9.38018 12.465C11.0083 13.3798 12.9917 13.3798 14.6198 12.465L20.6564 9.07348C22.1145 8.25428 22.1145 6.14682 20.6564 5.32762L14.6198 1.93606Z"
            />
            <path
              className="Icon__Bar__Button__SVG__Path"
              d="M2.97517 15.337C1.89805 16.277 2.02084 18.0803 3.34356 18.8235L9.38018 22.215C11.0083 23.1298 12.9917 23.1298 14.6198 22.215L20.6564 18.8235C21.9792 18.0803 22.102 16.277 21.0248 15.337L15.3545 18.5228C13.2701 19.6939 10.7299 19.6939 8.64545 18.5228L2.97517 15.337Z"
            />
            <path
              className="Icon__Bar__Button__SVG__Path"
              d="M2.81218 10.4955C1.91468 11.4675 2.0918 13.1202 3.34356 13.8235L9.38018 17.2151C11.0083 18.1298 12.9917 18.1298 14.6198 17.2151L20.6564 13.8235C21.9082 13.1202 22.0853 11.4675 21.1878 10.4955L15.3545 13.7728C13.2701 14.9439 10.7299 14.9439 8.64545 13.7728L2.81218 10.4955Z"
            />
          </svg>
        </NavLink>
        <NavLink
          to={`/${pathName.project.title}`}
          title={pathName.project.title}
          className={({ isActive }) =>
            isActive
              ? "Icon__Bar__Button--active Icon__Bar__Button"
              : "Icon__Bar__Button--non-active Icon__Bar__Button"
          }
        >
          <svg
            className="Icon__Bar__Button__SVG"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              className="Icon__Bar__Button__SVG__Path"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.29847 6.25C1.66598 3.42873 4.07855 1.25 7 1.25H17C19.9214 1.25 22.334 3.42873 22.7015 6.25H1.29847ZM1.25 7.75V17C1.25 20.1756 3.82436 22.75 7 22.75H17C20.1756 22.75 22.75 20.1756 22.75 17V7.75H1.25Z"
              fill="#2B3F6C"
            />
          </svg>
        </NavLink>
        <NavLink
          to={`/${pathName.calendar.title}`}
          title={pathName.calendar.title}
          className={({ isActive }) =>
            isActive
              ? "Icon__Bar__Button--active Icon__Bar__Button"
              : "Icon__Bar__Button--non-active Icon__Bar__Button"
          }
        >
          <svg
            className="Icon__Bar__Button__SVG"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              className="Icon__Bar__Button__SVG__Path"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.29847 7.75C2.66598 4.92873 5.07855 2.75 8 2.75H16C18.9214 2.75 21.334 4.92873 21.7015 7.75H2.29847ZM2.25 9.25V16.5C2.25 19.6756 4.82436 22.25 8 22.25H16C19.1756 22.25 21.75 19.6756 21.75 16.5V9.25H2.25ZM6.5 13.25C6.08579 13.25 5.75 12.9142 5.75 12.5C5.75 12.0858 6.08579 11.75 6.5 11.75H7.5C7.91421 11.75 8.25 12.0858 8.25 12.5C8.25 12.9142 7.91421 13.25 7.5 13.25H6.5ZM10.75 12.5C10.75 12.9142 11.0858 13.25 11.5 13.25H12.5C12.9142 13.25 13.25 12.9142 13.25 12.5C13.25 12.0858 12.9142 11.75 12.5 11.75H11.5C11.0858 11.75 10.75 12.0858 10.75 12.5ZM16.5 13.25C16.0858 13.25 15.75 12.9142 15.75 12.5C15.75 12.0858 16.0858 11.75 16.5 11.75H17.5C17.9142 11.75 18.25 12.0858 18.25 12.5C18.25 12.9142 17.9142 13.25 17.5 13.25H16.5ZM5.75 16.5C5.75 16.9142 6.08579 17.25 6.5 17.25H7.5C7.91421 17.25 8.25 16.9142 8.25 16.5C8.25 16.0858 7.91421 15.75 7.5 15.75H6.5C6.08579 15.75 5.75 16.0858 5.75 16.5ZM11.5 17.25C11.0858 17.25 10.75 16.9142 10.75 16.5C10.75 16.0858 11.0858 15.75 11.5 15.75H12.5C12.9142 15.75 13.25 16.0858 13.25 16.5C13.25 16.9142 12.9142 17.25 12.5 17.25H11.5ZM15.75 16.5C15.75 16.9142 16.0858 17.25 16.5 17.25H17.5C17.9142 17.25 18.25 16.9142 18.25 16.5C18.25 16.0858 17.9142 15.75 17.5 15.75H16.5C16.0858 15.75 15.75 16.0858 15.75 16.5ZM16.5 1.25C16.0858 1.25 15.75 1.58579 15.75 2L15.75 5C15.75 5.41421 16.0858 5.75 16.5 5.75C16.9142 5.75 17.25 5.41421 17.25 5L17.25 2C17.25 1.58579 16.9142 1.25 16.5 1.25ZM7.5 1.25C7.08579 1.25 6.75 1.58579 6.75 2L6.75 5C6.75 5.41421 7.08579 5.75 7.5 5.75C7.91421 5.75 8.25 5.41421 8.25 5L8.25 2C8.25 1.58579 7.91421 1.25 7.5 1.25Z"
              fill="#2B3F6C"
            />
          </svg>
        </NavLink>
        <NavLink
          to={`/${pathName.time.title}`}
          title={pathName.time.title}
          className={({ isActive }) =>
            isActive
              ? "Icon__Bar__Button--active Icon__Bar__Button"
              : "Icon__Bar__Button--non-active Icon__Bar__Button"
          }
        >
          <svg
            className="Icon__Bar__Button__SVG"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              className="Icon__Bar__Button__SVG__Path"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12.75 8C12.75 7.58579 12.4142 7.25 12 7.25C11.5858 7.25 11.25 7.58579 11.25 8V11.7324C11.25 12.1503 11.4589 12.5406 11.8066 12.7725L14.584 14.624C14.9286 14.8538 15.3943 14.7607 15.624 14.416C15.8538 14.0714 15.7607 13.6057 15.416 13.376L12.75 11.5986V8Z"
              fill="#2B3F6C"
            />
          </svg>
        </NavLink>
        <NavLink
          to={`/${pathName.statistics.title}`}
          title={pathName.statistics.title}
          className={({ isActive }) =>
            isActive
              ? "Icon__Bar__Button--active Icon__Bar__Button"
              : "Icon__Bar__Button--non-active Icon__Bar__Button"
          }
        >
          <svg
            className="Icon__Bar__Button__SVG"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              className="Icon__Bar__Button__SVG__Path"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.25 7C1.25 3.82436 3.82436 1.25 7 1.25H17C20.1756 1.25 22.75 3.82436 22.75 7V17C22.75 20.1756 20.1756 22.75 17 22.75H7C3.82436 22.75 1.25 20.1756 1.25 17V7ZM7.25 17C7.25 17.4142 7.58579 17.75 8 17.75C8.41421 17.75 8.75 17.4142 8.75 17V14C8.75 13.5858 8.41421 13.25 8 13.25C7.58579 13.25 7.25 13.5858 7.25 14V17ZM12 17.75C11.5858 17.75 11.25 17.4142 11.25 17V7C11.25 6.58579 11.5858 6.25 12 6.25C12.4142 6.25 12.75 6.58579 12.75 7V17C12.75 17.4142 12.4142 17.75 12 17.75ZM15.25 17C15.25 17.4142 15.5858 17.75 16 17.75C16.4142 17.75 16.75 17.4142 16.75 17V10C16.75 9.58579 16.4142 9.25 16 9.25C15.5858 9.25 15.25 9.58579 15.25 10V17Z"
              fill="#2B3F6C"
            />
          </svg>
        </NavLink>
      </div>
    </div>
  );
};
