import './Item.css'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const Item = ({name, image, description, price, totalItems, index, resetItems}) => {
    /* PROPTYPES */
    Item.propTypes = {
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        totalItems: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired,
        resetItems: PropTypes.bool.isRequired,
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
    }, [quantity])

    useEffect(() => {
        resetItems == true ? setQuantity(0) : null
    })


    return (
        <div className={'item'}>
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
