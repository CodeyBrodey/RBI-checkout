import './Checkout.css'
import Item from './Item/Item'
import { useState } from 'react'
/* PHOTOS */
import whopper from '../assets/whopper.jpg'
import chickenSandwich from '../assets/chicken-sandwich.png'
import bbqCuban from '../assets/bbq-cuban-sandwich.jpg'
import icedCoffee from '../assets/coffee.jpg'
import combo from '../assets/combo.png'
import cart from '../assets/cart-shopping-solid.svg'


const Checkout = () => {
    /* ITEM COUNTER */
    const [totalItems, setTotalItems] = useState([0, 0, 0, 0, 0])

    const itemArrToNum = totalItems.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    /* PRICE COUNTER */
    let [totalPrice] = useState([])
    
    totalPrice = totalItems.map((value, index) => {
        if(index == 0) {
            return value * 5.49
        } else if(index == 1) {
            return value * 1.99
        } else if(index == 2) {
            return value * 3.99
        } else if(index == 3) {
            return value * 6.50
        } else if(index == 4) {
            return value * 15.00
        } else {
            return 0
        }
    })
    
    const priceArrToNum = totalPrice.reduce((accumulator, currentValue) => accumulator + currentValue, 0).toFixed(2);

    /* PURCHASE HANDLER */
    const [purchaseTrue, setPurchaseTrue] = useState(false)
    const [resetItems, setResetItems] = useState(false)
    const handlePurchase = () => {
        setPurchaseTrue(true)
        setResetItems(true)
        setTimeout(() => {
            setPurchaseTrue(false)
            setResetItems(false)
        }, 4000)
        setTotalItems([0, 0, 0, 0, 0])
    }


    return(
        <section>
            <h1 className='page-title'>Checkout</h1>

            <div className='catalog'>
                <Item name='Whopper' image={whopper} description='burger' price={5.49} totalItems={(item, index) => {setTotalItems(totalItems.map((value, i) => index == i ? item : value))}} index={0} resetItems={resetItems} />

                <Item name='Iced Coffee' image={icedCoffee} description='iced coffee' price={1.99} totalItems={(item, index) => {setTotalItems(totalItems.map((value, i) => index == i ? item : value))}} index={1} resetItems={resetItems} />

                <Item name='Chicken Sandwich' image={chickenSandwich} description='chicken sandwich' price={3.99} totalItems={(item, index) => {setTotalItems(totalItems.map((value, i) => index == i ? item : value))}} index={2} resetItems={resetItems} />

                <Item name='BBQ Cuban Sub' image={bbqCuban} description='sub' price={'6.50'} totalItems={(item, index) => {setTotalItems(totalItems.map((value, i) => index == i ? item : value))}} index={3} resetItems={resetItems} />

                <Item name='RBI Am Hungry Combo' image={combo} description='combo' price={'15.00'} totalItems={(item, index) => {setTotalItems(totalItems.map((value, i) => index == i ? item : value))}} index={4} resetItems={resetItems} />
            </div>

            <span className={purchaseTrue ? 'purchase-notification' : 'hidden'}>Purchase successful!</span>

            <div className='cart'>
                <div className='cart-items'>
                    <span className='cart-title'>Items:</span>
                    <span>{itemArrToNum}</span>
                </div>

                <div className='cart-sum'>
                    <span className='cart-title'>Total Sum:</span>
                    <span>{'$' + priceArrToNum}</span>
                </div>

                <button className='cart-button' onClick={handlePurchase}>
                    <img src={cart} alt="" />
                    <span>Buy</span>
                </button>
            </div>
        </section>
    )
}

export default Checkout
