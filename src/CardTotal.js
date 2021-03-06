import React from 'react'
import NumberFormat from 'react-number-format';
import styled from 'styled-components';


function CardTotal({ getTotalPrice, getCount }) {


    return (
        <Container>
            <Subtotal>
                Subtotal ({getCount} items):
                <NumberFormat value={getTotalPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} />

            </Subtotal>
            <CheckoutButton>
                Proceed to Checkout
            </CheckoutButton>
        </Container>
    )
}

export default CardTotal

const Container = styled.div`
background-color:white;
flex:0.3;
padding:20px;
`

const Subtotal = styled.h2`
margin-bottom:16px;
`

const CheckoutButton = styled.button`
background-color:#f0c14b;
padding:4px 8px;
border:2px solid #a88734;
border-radius:4px;
cursor:pointer;
font-size:16px;
width:100%;
:hover{
    background:#ddb347;
}
`