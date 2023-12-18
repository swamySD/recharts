




import Areachart from './components/Areach/StreamedAreaChart.js';
import Card from './components/Card/Card.js';
import SprintChart from './components/SprintChart/SprintChart.js';
import SprintTable from './components/Tables/SprintTable.js';


function App() {
  return (
    <div className="App">
    
     <SprintChart/>
     
     <Areachart/>
     <SprintTable/>
     <Card/>
    </div>
  );
}

export default App;
