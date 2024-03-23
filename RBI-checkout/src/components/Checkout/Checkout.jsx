import './Checkout.css'
import Item from './Item/Item'
/* PHOTOS */
import whopper from '../assets/whopper.jpg'
import icedCoffee from '../assets/iced-coffee.jpg'
import chickenSandwich from '../assets/chicken-sandwich.png'
import bbqCuban from '../assets/bbq-cuban-sandwich.jpg'
import cart from '../assets/cart-shopping-solid.svg'


const Checkout = () => {

    return(
        <section>
            <h1 className='page-title'>Checkout</h1>

            <div className='catalog'>
                <Item name='Whopper' image={whopper} compClass='whopper' description='burger' price={5.49} />
                <Item name='Iced Coffee' image={icedCoffee} compClass='iced-coffee' description='iced coffee' price={1.99} />
                <Item name='Chicken Sandwich' image={chickenSandwich} compClass='chicken-sandwich' description='chicken sandwich' price={3.99} />
                <Item name='BBQ Cuban Sub' image={bbqCuban} compClass='bbq-cuban' description='sub' price={6.50} />
            </div>

            <div className='cart'>
                <div className='cart-items'>
                    <span className='cart-title'>Items:</span>
                    <span></span>
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
