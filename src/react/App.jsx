import { products } from './object.js';
import { IconSwitch } from './IconSwitch.jsx';
import { Store } from './Store.jsx';
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
        <Store products = {products} status = {icon}/>
      </div>
    </div>
  );
}


export default App;
