import { NavLink, useParams } from 'react-router-dom';
import { useCategories } from '../../../hooks/categories';
import './Navigation.css'

export function Navigation() {
    let { categories: menu_items } = useCategories()
    let params = useParams();
    if (!menu_items.length) return null;
    return <div className="left-menu box-shadow content-box">
        <h5 className='left-menu-title'>Категории</h5>
        {menu_items.map((i, index) => {
            return <div className='left-menu-item' key={index}>
                <NavLink
                    to={`/category/${i}`}
                    className={['left-menu-item-nav', params.category !== i ? "" : "left-menu-item-nav-active"].join(' ')}
                    key={index}>
                    {i[0].toUpperCase() + i.slice(1)}
                </NavLink>
            </div>;
        })}
    </div>;
}

