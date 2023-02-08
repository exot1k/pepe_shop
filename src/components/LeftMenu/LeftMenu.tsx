import './LeftMenu.css'
import { Navigation } from './Navigation/Navigation';
import { SortBox } from './SortBox/SortBox';

interface ILeftMenu {

}

export function LeftMenu(props: ILeftMenu) {
    return (
        <>
            {/* <SortBox /> */}
            <Navigation />
        </>
    )
}


