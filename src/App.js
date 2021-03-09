import {BrowserRouter as Router,Route} from 'react-router-dom'
import CreateScreen from './components/screens/CreateScreen';
import ViewScreen from './components/screens/ViewScreen';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
       <>
        <Route exact path="/" component={CreateScreen} />
        <Route path="/view" component={ViewScreen} />
       </>
    </Router>
   );
}

export default App;
