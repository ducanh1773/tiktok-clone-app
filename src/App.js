import Header from './components/Layout/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
    return (
        <Router>
            <div className="App">
                {/* <Routes>
                    <Route path="/header" element={<Header></Header>}></Route>
                </Routes> */}
                <h1> React App</h1>
            </div>
        </Router>
    );
}

export default App;
