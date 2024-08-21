import Header from './Header';
import Sidebar from './SideBar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <Sidebar></Sidebar>
                <div className="content">
                    {children}
                    <p></p>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
