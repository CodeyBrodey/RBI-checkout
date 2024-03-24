import './Item.css'
import { useState } from 'react'

const Item = ({name, image, compClass, description, price, totalItems, index}) => {
    let [quantity, setQuantity] = useState(0)

    const handlePlusClick = () => {
        setQuantity(quantity + 1)
        totalItems(quantity, index)
    }

    const handleMinusClick = () => {
        if(quantity > 0) {
            setQuantity(quantity - 1)
            totalItems(quantity, index)
        }   
    }



    return (
        <div className={compClass + ' item'}>
            <div className='item-img-container'>
                <img src={'./' + image} alt={"delicious " + description} />
            </div>
            <span className={quantity > 0 ? 'selected '+ name : name}>{name}</span>
            <span className={name + '-price'}>{'$' + price}</span>
            <div className='quantity-container'>
                <span>
                    <button className='quantity-buttons' onClick={handleMinusClick}>-</button>
                    {quantity}
                    <button className='quantity-buttons' onClick={handlePlusClick}>+</button>
                </span>
            </div>

        </div>
    )
}

export default Item
