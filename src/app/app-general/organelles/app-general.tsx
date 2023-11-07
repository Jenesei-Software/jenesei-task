import { Outlet } from "react-router-dom";

// import { AppGeneralHeader } from "../molecules/app-general-header";
import { AppGeneralBar } from "../molecules/app-general-bar";

import '../styles/app-general.css'
export const AppGeneral = () => {
    return (
        <div className="AppGeneral">
            {/* <AppGeneralHeader/> */}
            <AppGeneralBar/>
            <div className="AppGeneral__Outlet">
                <Outlet />
            </div>
        </div>
    );
};
