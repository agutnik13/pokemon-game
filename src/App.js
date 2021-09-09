import HeaderBlock from './components/HeaderBlock'
import { Header, Layout } from './components';

const App = () => {
  return (
    <>
      <HeaderBlock 
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
