
import React from "react";

const Qr = () => {
    return (
        <div className="App">

            <img
                style={{ backgroundColor: "red", color: "blue" }}
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=kritikasrivastava.com"
                alt="hello"
            />

        </div>
    );
}

export default Qr
