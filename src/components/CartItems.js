import React, { useContext } from 'react';
import { Item, Header, Button, Icon, Input } from 'semantic-ui-react';

import { CartItemsContext } from '../App'

const CartItems = (props) => {

    // console.log(props, 'props from line_items')

    const helpFnc = useContext(CartItemsContext)

    return (
        <>
            <Item.Image size='tiny' src={"https://uploads.appetizeapp.com/product-images/thumb__1625848407.jpg"} />
            <Item.Content verticalAlign='middle'>
                <Item.Header>{"Cheese Cake"}</Item.Header>
                {/* <Item.Meta>
                    <span>{props.item.variants[0].option_name}</span>
                </Item.Meta> */}
                <div className='quanity-group'>
                    <Button
                        negative 
                        className='quan-buttons' 
                        onClick={() => {
                            let newQuanity = props.item.quantity - 1
                            helpFnc.subtractQuanity(props.item.id, newQuanity)
                        }}
                    > 
                        <Icon name='minus' /> 
                    </Button>
                    <Input 
                        className='input-quanity'
                        value={1} 
                    />
                    <Button
                        positive 
                        className='quan-buttons'
                        onClick={() => {
                            let newQuanity = props.item.quantity + 1
                            helpFnc.addQaunity(props.item.id, newQuanity)
                        }}
                    > 
                        <Icon name='plus' /> 
                    </Button>
                </div>
                <Item.Extra className='item-total'>
                    <Header floated='right'>${"4.29"}</Header>
                </Item.Extra>
            </Item.Content>
        </>
    );
};

export default CartItems;