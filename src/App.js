import React, {Component} from 'react';
import Produk from './components/Produk';
import Profil from './components/Profil';
import SlideShow from './components/SlideShow';

class App extends Component {
  render(){
    return(
      <div>
        <Profil/>
        <SlideShow />
        <br />
        <Produk />
      </div>
    );
  }
}

export default App;