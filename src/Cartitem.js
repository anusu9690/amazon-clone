import React from 'react'
import styled from 'styled-components';
import { db } from './firebase';


function Cartitem({ id, item }) {

    let options = [];
    for (let i = 1; i < Math.max(item.quantity + 1, 21); i++) {
        options.push(<option value={i}> Qty: {i} </option>)
    }

    const changeQuantity = (newQuantity) => {
        console.log(newQuantity);
        db.collection('cartItems').doc(id).update({
            quantity: parseInt(newQuantity)
        })
    }

    const deleteItem = (e) => {
        e.preventDefault();
        db.collection('cartItems').doc(id).delete();
    }


    return (
        <Container>
            <ImageContainer>
                <img src={item.image} />
            </ImageContainer>
            <CartItemInfo>
                <CartItemInfoTop>
                    <h2>{item.name}</h2>
                </CartItemInfoTop>
                <CartItemInfoBottom>
                    <CartItemQuantity>
                        <select value={item.quantity}
                            onChange={(e) => changeQuantity(e.target.value)}
                        >
                            {options}
                        </select>
                    </CartItemQuantity>
                    <CartItemDelete onClick={deleteItem}>Delete</CartItemDelete>
                </CartItemInfoBottom>
            </CartItemInfo>

            <CartItemPrice>
                ${item.price}
            </CartItemPrice>

        </Container>
    )
}

export default Cartitem

const Container = styled.div`
padding-top:12px;
padding-bottom:12px;
display:flex;

`
const ImageContainer = styled.div`
width:180px;
height:180px;
margin-right:16px;
flex-shrink:0;
flex-grow:0;
img{
    object-fit:contain;
    width:100%;
    height:100%;
}

`
const CartItemInfo = styled.div`
flex-grow:1;

`
const CartItemInfoTop = styled.div`
color:#007185;
h2{
    font-size:18px;
}

`
const CartItemInfoBottom = styled.div`
display:flex;
margin-top:4px;
align-items:center;

`
const CartItemQuantity = styled.div`
select{
    boder-radius:7px;
    bachground-color:#F0F2F2;
    padding:8px;
    box-shadow:
    :focus{
        outline:none;
    }
}

`

const CartItemDelete = styled.div`
color:#007185;
margin-left:16px;
cursor:pointer;

`

const CartItemPrice = styled.div`
font-size:18px;
font-weight:700;
margin-left:16px;

`