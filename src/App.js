import Footer from './components/Footer';
import Header from './components/Header';
import Layout from './components/Layout';
import { POKEMONS } from './Pokemons';
import PokemonCard from './components/PokemonCard';
import Bg1Img from './image/bg1.jpg';
import Bg3Img from './image/bg3.jpg';

const App = () => {
  return (
    <>
      <Header 
        title="This is new Title!"
        hideBackgraund
      />
      <Layout
        urlBg={Bg1Img}
        title= "Hi!"
        descr= "This is the first layout!"
      />
      <Layout
        colorBg="antiquewhite"
        descr="This is the second layout!"
      >
        {/* <div className ="flex">
          {
            POKEMONS.map(item => <PokemonCard {...item}/>)
          }
        </div> */}
      </Layout>

      <Layout
        urlBg={Bg3Img}
        descr="This is the third layout!"
      />
      <Footer/>
    </>
  );
}


export default App;
