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
        urlBg='bg3'
      />
      <Layout
        title=""
      />
      <Layout
        urlBg="bg1"
      />
    </>
  );
}


export default App;
