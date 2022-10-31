import React from "react";

export const ConfirmWindow = ({message, onWindow}: any) => {

    return(
        <div className="windowConfirmPosition"> 
            <div className="windowConfirmStyle">
                <div className="confirmText">{message}</div>
                    <div>
                        <button
                        onClick={() => onWindow(true)}
                        className="btnStyleCard"
                        > Yes </button>
                        <button
                        onClick={() => onWindow(false)}
                        className="btnStyleCard"
                        > No </button>
                    </div>
            </div>
        </div>
    )
}