import './Item.css'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const Item = ({name, image, compClass, description, price, totalItems, index}) => {
    /* PROPTYPES */
    Item.propTypes = {
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        compClass: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number,
        totalItems: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired,
    }

    let [quantity, setQuantity] = useState(0)

    const handlePlusClick = () => {
        setQuantity(quantity + 1)
    }

    const handleMinusClick = () => {
        if(quantity > 0) {
            setQuantity(quantity - 1)
        }   
    }

    useEffect(() => {
        totalItems(quantity, index)
    }, [quantity, index])


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
