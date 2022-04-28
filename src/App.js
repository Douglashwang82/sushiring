import logo from './logo.svg';
import './App.css';
import TreeDGraph from './components/treedgraph/TreeDGraph';
import { MockForm } from './components/mockform/MockForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
<>

    <TreeDGraph></TreeDGraph>
    <MockForm></MockForm>
</>
  );
}

export default App;
