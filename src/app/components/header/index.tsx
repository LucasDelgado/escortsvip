import { Search } from '../search'
import './style.css'

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div>
                    <div id="nav-icon2">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div>
                    <div>Logo</div>
                </div>
                <div>
                    <Search />
                </div>               
            </div>
        </header>
    )
}