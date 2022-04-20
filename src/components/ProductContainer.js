import React, { useState, useEffect } from 'react';
import Commerce from '@chec/commerce.js'
import { Grid, Divider } from 'semantic-ui-react';
import ProductCard from '../components/ProductCard'

const ProductContainer = (props) => {

    const commerce = new Commerce("pk_test_424561dc50e53e368fb3563d39a0622a953124acb7dca")
    
    const [products, setProducts] = useState([])

    useEffect(() => {
        commerce.products.list()
          .then(res => {
            setProducts(res.data)
          })
          .catch(err => console.log(err))

          props.setCheckout(false)
    },[])

    return (
        <>
            <Divider horizontal>Virtual Kiosk</Divider>
            <Grid stackable columns='equal' centered>
                {/* <Image src={hero} fluid/> */}
                {products.map(product => (
                    <Grid.Column width={5} key={product.id}>
                        <ProductCard 
                            product={product} 
                            addToCart={props.addToCart} 
                        />
                    </Grid.Column>
                ))}
            </Grid>
        </>
    );
};

export default ProductContainer;