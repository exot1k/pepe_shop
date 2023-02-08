import desc from
    '../../../media/sort-descending.png'
import asc from
    '../../../media/sort-ascending.png'
import './SortBox.css'


export function SortBox() {

    return (
        <div className='content-box sort-box'>
             <img className='sort-box-sort-img' src={desc} alt="Descending"/>
             <img className='sort-box-sort-img' src={asc} alt="Ascending"/>
        </div>
    )
}