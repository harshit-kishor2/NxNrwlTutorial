import React from "react";

export default function Loading() {
    return (
        <div className=''>
            <div className="border border-light p-3 mb-4">
                <div className="d-flex align-items-center justify-content-center" style={{ height: "550px" }}>
                    <div className=" spinner-border"></div>
                </div>
            </div>
        </div>
    );
}