import React from 'react';
import { useDispatch } from "react-redux";

const Button = (props) => {

  const dispatch = useDispatch()
  // const priceCar = () => {dispatch({ type: 'PRICE' , payload : props.version.id})}


  const SelectModel = () => {
    // priceCar()
    dispatch({ type: 'MODEL' , payload : props.version.id});
    dispatch({ type: 'TOTAL'});
  }


  return (
    <>
    <button type="button" onClick={ () => (SelectModel()) } className="btn btn-success material-tooltip-main ">
    </button>
    </>
  )
}



export default Button;
