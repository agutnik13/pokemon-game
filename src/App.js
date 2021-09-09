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
        urlBg='./image/bg3.jpg'
        />
          <Layout
        title=""
        />
          <Layout
        title=""
        />
    </>
  );
}


export default App;
