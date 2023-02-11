import './Header.scss'
import cart from '../../media/cart.png'


export function HeaderContent() {
    let product_count = 1
    return (
        <>
            <div className="header-content-navigation">
                <div className='header-content-navigation-content'>
                    <div className='cartLogo'>
                        <div className='productCount'>{product_count}</div>
                        <img src={cart} alt={`Товаров в корзине: ${product_count}`}></img>
                    </div>
                </div>
            </div>
        </>)
}