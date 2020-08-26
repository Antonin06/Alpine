import React from 'react';
import { useDispatch } from "react-redux";

const Button = (props) => {

  const dispatch = useDispatch()
  const priceCar = () => {dispatch({ type: 'PRICE' , payload : props.version.id})}
  // const hitMonster = () => {dispatch({ type: 'HIT_MONSTER' })}
  // const looseMana = () => {dispatch({ type: 'LOOSE_MANA', payload : props.player.id })}
  // const regenMana = () => {dispatch({ type: 'REGEN_MANA', payload : props.player.id })}
  // const regenHp = () => {dispatch({ type: 'REGEN_HP', payload : props.player.id })}

  const AddPrice = () => {
    priceCar()
  }


  return (
    <>
    <button type="button" onClick={ () => (AddPrice()) } className="btn btn-success material-tooltip-main ">
    </button>
    </>
  )
}



export default Button;
