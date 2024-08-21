import Header from './components/Layout/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicROutes } from '../src/routes';
import DefaultLayout from './components/Layout/DefaultLayout';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicROutes.map((route, index) => {
                        const Page = route.component;
                        return <Route key={index} path={route.path} element={<Page></Page>}></Route>;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
