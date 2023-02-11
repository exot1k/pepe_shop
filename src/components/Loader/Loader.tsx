import './Loader.scss'
import loader from '../../media/Loader.gif'
interface ILoaderProprs {
    visible: boolean
}
export function Loader({ visible }: ILoaderProprs) {
    if (!visible) return null
    return (
        <div>
            <img src={loader} alt="loading..." className='loader' />
            <div className='background' />
        </div>
    )

}
