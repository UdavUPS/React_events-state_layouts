import { products } from './object.js';
import { IconSwitch } from './IconSwitch.jsx';
import { CardsView } from './CardsView.jsx';
import { ListView } from './ListView.jsx';
import { useState } from 'react';




function App() {

    let [icon, setIcon] = useState("view_list");
    
  


    const switcher = () => {
      
      if (icon === 'view_list') {
        setIcon("view_module");
    }
      if (icon === 'view_module') {
        setIcon("view_list");
      }
    }


  return (
    <div>
      <div>
        <IconSwitch onClick = {switcher} icon = {icon}  />
      </div>
      <div>
        {icon === "view_list" ? <ListView products = {products}/> : <CardsView products = {products}/>}
      </div>
    </div>
  );
}


export default App;