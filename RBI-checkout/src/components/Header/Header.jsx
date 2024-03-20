import './Header.css'
import logo from '../assets/rbi_logo.png'
import search from '../assets/icon-search.png'

const Header = () => {

    return (
        <header>
            <div className='logo-container'>
                <img src={logo} alt="Restaurant Brands International logo" className='logo'/>
            </div>

            <div className='stock-nav'>
                <div className='stock'>
                    <span className='span-bold'>QSR (NYSE) $80.90 | 0.32 </span>
                    <span>As of March 19, 2024 4:00 PM ET</span>
                </div>

                <nav>
                    <ul className='nav-list'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Brands</li>
                        <li>Investors</li>
                        <li>Careers</li>
                        <li>News</li>
                        <li>Contact</li>
                        <li>Sustainability</li>
                        <li>Checkout</li>
                        <div>
                            <img src={search} className='search-icon'/>
                        </div>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
