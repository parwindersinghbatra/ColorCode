import './App.css';
import Color from './component/Color';

function App() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
     flexWrap:'wrap',
  }}>
    
      <Color colorCode='#ff6663' colorName='PINK'/>
      <Color colorCode='#FFFF00' colorName='Yellow'/>
      <Color colorCode='#FFA500' colorName='Orange'/>
      <Color colorCode='#0000FF' colorName='Blue'/>
      <Color colorCode='#00008B' colorName='Dark Blue'/>
      <Color colorCode='#964B00' colorName='Brown'/>
      <Color colorCode='#FFA07A' colorName='LightSalmon'/>
      <Color colorCode='#FF0000' colorName='Red'/>
    </div>
  );
}

export default App;
