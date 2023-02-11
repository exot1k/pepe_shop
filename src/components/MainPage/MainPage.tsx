
import { LeftMenu } from "../LeftMenu/LeftMenu";
import { PageContent } from "../PageContent/PageContent";
import './MainPage.css'
interface ILayout {

}

export function MainPage(props: ILayout) {
    return (
        <div className="main-page-row">
            <div className="main-page-left-menu">
                <LeftMenu />
            </div>
            <div className="main-page-content">
                <PageContent />
            </div>
        </div>
    )
}