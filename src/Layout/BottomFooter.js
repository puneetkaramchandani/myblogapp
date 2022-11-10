import * as React from "react";

const BottomFooter = () => {
    return(
       <div className="bottom-footer d-flex justify-content-center align-items-center bg-dark text-white">
            Copyright &copy; {new Date().getFullYear()} Puneet Karamchandani. All rights reserved. 
            Data Source - <a className="ms-2 text-white" href="https://dummyapi.io/">Dummy API</a>
       </div>
    );
};

export default BottomFooter;