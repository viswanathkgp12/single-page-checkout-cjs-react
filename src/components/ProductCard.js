import React, { useState, useEffect } from 'react';
import { Card, Image, Button, Icon, Dropdown } from 'semantic-ui-react';

const ProductCard = (props) => {
    // console.log(props.product, 'props from Container')

    const [sizes, setSizes] = useState([])
    const [variantInfo, setVariantInfo] = useState()

    // useEffect(() => {        
        
    //     // let finalSizeArray = props.product.variants[0].options.map(option => {
    //     //     let sizeInfo = {}

    //     //     sizeInfo.key = option.name
    //     //     sizeInfo.text = option.name
    //     //     sizeInfo.value = option.id

    //     //     return sizeInfo
    //     // })

    //     setSizes(finalSizeArray)
    // }, [])

    const handleSize = (e, {value}) => {
        setVariantInfo({[props.product.variants[0].id]: value})
    }

    const handleButtonAddCart = e => {
        e.preventDefault()
        props.addToCart(props.product.id, variantInfo)
        
        
        // Funtion to Clear Select Input for Dropdown - Needs work. 
        // let selectInput = document.querySelectorAll('.sizes-drop')
        // selectInput.forEach((input,i) => {
        //     input.children[0].innerHTML = 'Select Size'
        //     // input.children[0].classList.add('default')
        // })
    }

    return (
        <Card>
            <Image src={"https://uploads.appetizeapp.com/product-images/thumb__1625848407.jpg"} />
            <Card.Content>
                <Card.Header>{"Cheese Cake"}</Card.Header>
                <Card.Meta>{"$4.29"}</Card.Meta>
                <Card.Description>{"Plain Cheese Cake"}</Card.Description>
                <Button fluid className='add-button' onClick={handleButtonAddCart}>
                    Add to Cart
                    <Icon name='arrow right' />
                </Button>
            </Card.Content>
        </Card>
    );
};

export default ProductCard;
