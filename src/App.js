import Footer from './components/Footer';
import Header from './components/Header'
import Layout from './components/Layout'

const App = () => {
  return (
    <>
      <Header 
        title="This is new Title!"
        hideBackgraund
      />
      <Layout
        urlBg='bg1'
        title= "Hi!"
        descr= "This is the first layout!"
      />
      <Layout
        colorBg="antiquewhite"
        descr="This is the second layout!"
        />
      <Layout
        urlBg="bg3"
        descr="This is the third layout!"
      />
      <Footer/>
    </>
  );
}


export default App;
