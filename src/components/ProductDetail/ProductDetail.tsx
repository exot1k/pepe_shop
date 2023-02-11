import './ProductDetail.scss'
import backBTN from '../../media/BackBTN.png'
import rate_none from '../../media/rate-none.svg'
import rate_fill from '../../media/rate-fill.svg'
import left_arrow from '../../media/left-arrow.png'
import right_arrow from '../../media/right-arrow.png'
import { useNavigate, useParams } from 'react-router-dom';
import { useProduct } from '../../hooks/product';

export const ProductDetail = () => {
    const navigate = useNavigate();
    let params = useParams();
    let product = useProduct(Number(params.id))
    let rate = 0

    if (product?.rating.rate) {
        rate = Math.round(product!.rating.rate)
    }
    console.log("rerender")
    return (
        <div className='detail-container'>
            <div className='product content-box'>
                <img src={backBTN} className="backButton" onClick={() => navigate(-1)} alt="Go back" />
                <div className='content'>
                    <div className='firstColumn'>
                        <div className='caruselParent'>
                            <div className='caruselItem'>
                                <img src={left_arrow} className="caruselButton"></img>
                            </div>
                            <div className='caruselItem'>
                                <img src={product?.image} className="productImage" alt={product?.title} />
                            </div>

                            <div className='caruselItem'>
                                <img src={right_arrow} className="caruselButton"></img>
                            </div>

                        </div>

                        <div className='rate'>
                            {
                                [...Array(rate)].map(() => {
                                    return <img src={rate_fill} alt="Рейтинг"></img>
                                })
                            }
                            {
                                [...Array(5 - rate)].map(() => {
                                    return <img src={rate_none} alt="Рейтинг"></img>
                                })
                            }

                        </div>
                        <div className='rateCount'>
                            <h3>{product?.rating.count} отзывов</h3>
                        </div>
                    </div>
                    <div className='secondColumn' />
                    <div className='thirdColumn'>
                        <p className='title'>{product?.title}</p>
                        <p className='desc'>{product?.description}</p>
                        <h1 className='price'>{product?.price} $</h1>
                        <button className='addToCartBTN' >
                            Add to cart
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}