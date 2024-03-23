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
    const [totalItems, setTotalItems] = useState([])
    const totalItemss = 0

    totalItems.forEach((item) => totalItemss + item)
    useEffect(() => {
        console.log(totalItemss)
    }, [totalItemss])




    return(
        <section>
            <h1 className='page-title'>Checkout</h1>

            <div className='catalog'>
                <Item name='Whopper' image={whopper} compClass='whopper' description='burger' price={5.49} totalItems={(items, index) => setTotalItems((i)=> {if(i === index) {return items + 1} else {return items}})} index={0} />
                <Item name='Iced Coffee' image={icedCoffee} compClass='iced-coffee' description='iced coffee' price={1.99} totalItems={(items, index) => setTotalItems(items)} index={1} />
                <Item name='Chicken Sandwich' image={chickenSandwich} compClass='chicken-sandwich' description='chicken sandwich' price={3.99} totalItems={(items, index) => setTotalItems(items)} index={2} />
                <Item name='BBQ Cuban Sub' image={bbqCuban} compClass='bbq-cuban' description='sub' price={6.50} totalItems={(items, index) => setTotalItems(items)} index={3} />
            </div>

            <div className='cart'>
                <div className='cart-items'>
                    <span className='cart-title'>Items:</span>
                    <span>{totalItems}</span>
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
