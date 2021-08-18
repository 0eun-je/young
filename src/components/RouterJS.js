/* RouterJS : 페이지 전환 */
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import PortfolioPage from '../pages/PortfolioPage';

function RouterJS(props) {
    return (
        <Router>
            <Route path="/" exact render={()=><MainPage {...props} />} />
            <Route path="/portfolio/:id" exact render={props=><PortfolioPage {...props} />} />
        </Router>
    );
}

export default RouterJS;