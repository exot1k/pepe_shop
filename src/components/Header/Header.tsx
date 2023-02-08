import { DropDownNav } from '../DropDownNav/DropDownNav'
import './Header.scss'
import { Logo } from '../Logo/Logo'
import { HeaderContent } from './HeaderContent'
import { useSrcollY } from '../../hooks/scroll';

export function Header() {
    let { scrollY } = useSrcollY()
    return (
        <>
            <header className="fixed-top">
                <div className={["header", scrollY !== 0 ? "header-shadow" : ""].join(' ')}>
                    <div className='header-container'>
                        <div className='header-logo-dropdown'>
                            <Logo />
                            <DropDownNav />
                        </div>
                        <HeaderContent />
                    </div>
                </div>
            </header>
        </>)
}