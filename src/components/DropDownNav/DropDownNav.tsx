import './DropDownNav.css'
import drop_down_logo from '../../media/drop-down-icon.png'
interface IDropDownNavProps {

}

export function DropDownNav(props: IDropDownNavProps) {
    return (
        <>
            <div className="drop-down-navigation">
                <img src={drop_down_logo} className="drop-down-img" />
            </div>
        </>)
}