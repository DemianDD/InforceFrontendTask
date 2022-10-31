import React from "react";

interface IProps {
  ShowAllOnClick: () => void;
}

export const ShowAllButton = (props: IProps) => {

  const ShowAllProductInfo = () => {
    props.ShowAllOnClick()
  };
  
    return (
        <>
          <button className="showAllButton" 
          onClick={ShowAllProductInfo}>
            </button>
        </>
    );
};