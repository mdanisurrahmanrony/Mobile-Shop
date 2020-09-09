import React from "react";

const Title = ({ name, title }) => {
    return (
        <div className="row">
            <div className="col-12 text-center text-title">
                <h1 className="text-capitalize">
                    {name} <strong> {title} </strong>
                </h1>
            </div>
        </div>
    );
};

export default Title;
