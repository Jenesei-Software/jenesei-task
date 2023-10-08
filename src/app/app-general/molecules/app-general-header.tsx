import '../styles/app-general-header.css'

export const AppGeneralHeader = () => {
    return (
        <div className="AppGeneralHeader">
            <div className="AppGeneralHeader__Logo">
                <svg className="AppGeneralHeader__Logo__Icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" fill="#4195D2" />
                    <path d="M17.6097 15.8068C17.6097 14.4868 18.6798 13.4167 19.9998 13.4167C21.3199 13.4167 22.39 14.4868 22.39 15.8068V29.7477C22.39 31.0677 21.3199 32.1378 19.9998 32.1378C18.6798 32.1378 17.6097 31.0677 17.6097 29.7477V15.8068Z" fill="white" />
                    <path d="M24.0359 15.8987C24.0359 14.5279 25.1472 13.4167 26.518 13.4167C27.8888 13.4167 29 14.5279 29 15.8987V29.6558C29 31.0266 27.8888 32.1378 26.518 32.1378C25.1472 32.1378 24.0359 31.0266 24.0359 29.6558V15.8987Z" fill="white" />
                    <path d="M11 10.3441C11 8.97331 12.1112 7.86206 13.482 7.86206C14.8528 7.86206 15.9641 8.97331 15.9641 10.3441V29.6558C15.9641 31.0266 14.8528 32.1378 13.482 32.1378C12.1112 32.1378 11 31.0266 11 29.6558V10.3441Z" fill="white" />
                </svg>

                <div className="AppGeneralHeader__Logo__Title">
                    Jen Task
                </div>
            </div>
        </div>
    );
};
