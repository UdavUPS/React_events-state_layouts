import { products } from './object.js';
import { IconSwitch } from './IconSwitch.jsx';
/* import { Store } from './Store.jsx'; */
import { CardsView } from './CardsView.jsx';
import { ListView } from './ListView.jsx';
import { useState } from 'react';




function App() {

    let [icon, setIcon] = useState("view_list");
    let [elem, chElem] = useState(<ListView products = {products}/>);
  


    const switcher = () => {
      
      if (icon === 'view_list') {
        setIcon("view_module");
        chElem(<CardsView products = {products}/>);
    }
      if (icon === 'view_module') {
        setIcon("view_list");
        chElem(<ListView products = {products}/>);
      }
    }


  return (
    <div>
      <div>
        <IconSwitch onClick = {switcher} icon = {icon}  />
      </div>
      <div>
        {elem}
      </div>
    </div>
  );
}


export default App;