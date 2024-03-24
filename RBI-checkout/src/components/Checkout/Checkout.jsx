import './Checkout.css'
import Item from './Item/Item'
import { useEffect, useState } from 'react'
/* PHOTOS */
import whopper from '../assets/whopper.jpg'
import icedCoffee from '../assets/iced-coffee.jpg'
import chickenSandwich from '../assets/chicken-sandwich.png'
import bbqCuban from '../assets/bbq-cuban-sandwich.jpg'
import cart from '../assets/cart-shopping-solid.svg'


const Checkout = () => {
    const [totalItems, setTotalItems] = useState([0, 0, 0, 0])

    const itemArrToNum = totalItems.forEach((item) => {item[]})

    useEffect(() => {
        console.log(itemArrToNum)
    }, [itemArrToNum])


    return(
        <section>
            <h1 className='page-title'>Checkout</h1>

            <div className='catalog'>
                <Item name='Whopper' image={whopper} compClass='whopper' description='burger' price={5.49} totalItems={(item, index) => {setTotalItems(totalItems.map((value, i) => index == i ? item : value))}} index={0} />

                <Item name='Iced Coffee' image={icedCoffee} compClass='iced-coffee' description='iced coffee' price={1.99} totalItems={(item, index) => {setTotalItems(totalItems.map((value, i) => index == i ? item : value))}} index={1} />

                <Item name='Chicken Sandwich' image={chickenSandwich} compClass='chicken-sandwich' description='chicken sandwich' price={3.99} totalItems={(item, index) => {setTotalItems(totalItems.map((value, i) => index == i ? item : value))}} index={2} />

                <Item name='BBQ Cuban Sub' image={bbqCuban} compClass='bbq-cuban' description='sub' price={6.50} totalItems={(item, index) => {setTotalItems(totalItems.map((value, i) => index == i ? item : value))}} index={3} />
            </div>

            <div className='cart'>
                <div className='cart-items'>
                    <span className='cart-title'>Items:</span>
                    <span>{itemArrToNum}</span>
                </div>

                <div className='cart-sum'>
                    <span className='cart-title'>Total Sum:</span>
                    <span>{'$' + null}</span>
                </div>

                <button className='cart-button'>
                    <img src={cart} alt="" />
                    <span>Buy</span>
                </button>
            </div>
        </section>
    )
}

export default Checkout
