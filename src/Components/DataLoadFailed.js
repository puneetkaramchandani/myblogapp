import React from "react";
import PropTypes from 'prop-types';

const DataLoadFailed = ({message}) => {
    return(<div className="container text-center text-danger font-monospace">
        <h4 className="fs-2">Opps!</h4>
        <p className="fs-4">{message}</p>
    </div>)
};

DataLoadFailed.propTypes = {
    message:PropTypes.string
};

export default DataLoadFailed;