import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {orderByScoreAction, orderByHealthScoreAction, orderAction} from '../../redux/actions/actions'
import styled from 'styled-components'
import { primaryColor, secondaryColor } from '../../utils/colors'

const Container = styled.div`
  height: 10px;
//   box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: row;
    justify-content: space-evenly;
    align-items: center;;
  padding: 10px;
  font-size: 14px;
  width: fit-content;
  margin-left: 32%;
    `

    const Label = styled.label`
    font-size: 13px;
    font-weight: 500;
    // display: flex;
    // justify-content: center;
    // flex-direction: row;
    // flex-wrap: wrap;

    `

    const Button = styled.button`
    background-color: ${secondaryColor};
    border-radius: 40px;
    padding: 5px;
    margin: 5px;
    font-size: 11spx;
    border: none;
    cursor: pointer;
    `




const Order = () => {

    const dispatch = useDispatch()
    const [order, setOrder] = useState("")

    // useEffect(() => {
    //     dispatch(orderByAction(order))
    // }, [order, dispatch])

    const handleOrderByScore = (event, string) => {
        event.preventDefault();
        dispatch(orderByScoreAction(string))
        setOrder(event.target.value)
    }

    const handleOrder = (event, string) => {
        event.preventDefault();
        dispatch(orderAction(string))
        setOrder(event.target.value)
    }

    const handleOrderByHealthScore = (event, string) => {
        event.preventDefault();
        dispatch(orderByHealthScoreAction(string))
        setOrder(event.target.value)
    }




  return (
    <Container>
        <Label>Order by:</Label>
        <Button onClick={(event) => handleOrder(event, "asc")}>A - Z</Button>
        <Button onClick={(event) => handleOrder(event, "desc")}>Z - A</Button>
        <Label>Order by Score:</Label>
        <Button onClick={(event) => handleOrderByScore(event, "max")}>Maximum score</Button>
        <Button onClick={(event) => handleOrderByScore(event, "min")}>Minimum score</Button>
        <Label>Order by Health Score:</Label>
        <Button onClick={(event) => handleOrderByHealthScore(event, "min")}>Maximum score</Button>
        <Button onClick={(event) => handleOrderByHealthScore(event, "max")}>minimum score</Button>
    </Container>
  )
}

export default Order