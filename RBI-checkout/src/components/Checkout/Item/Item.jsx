import './Item.css'
import { useState } from 'react'

const Item = ({name, image, compClass, description, price}) => {
    let [quantity, setQuantity] = useState(0)

    return (
        <div className={compClass + ' item'}>
            <img src={'./' + image} alt={"delicious " + description} />
            <span className={name}>{name}</span>
            <span className={name + '-price'}>{'$' + price}</span>
            <div className='quantity-container'>
                <span>
                    <button className='quantity-buttons'>+</button>
                    {quantity}
                    <button className='quantity-buttons'>-</button>
                </span>
            </div>

        </div>
    )
}

export default Item
