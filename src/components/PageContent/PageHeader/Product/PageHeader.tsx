import './PageHeader.scss'
import desc from '../../../../media/sort-descending.png'
import asc from '../../../../media/sort-ascending.png'
import { Link } from 'react-router-dom'
interface IPageHeaderPrors {
    title: string | undefined
}
export function PageHeader({ title }: IPageHeaderPrors) {
    const header_title = title ? title : 'все товары'
    
    return (
        <div className="page-content-header content-box">
            <div>
                <h5 className='left-menu-title'>{header_title[0].toUpperCase() + header_title.slice(1) + ':'}</h5>
            </div>
            <div className='sort'>
                <Link to="?sort=desc">
                    <img src={desc} alt="Descending" />
                </Link>
                <Link to="?sort=asc">
                    <img src={asc} alt="Ascending" />
                </Link>
            </div>
        </div>
    )
}