import AppStore from './components/app-store-task';
import GalleryApp from './components/gallery-app';
import CapitalsApp from './components/capitals-app';
import './App.css';

const App = () => {
  return (
    <>
      <GalleryApp />
      <CapitalsApp />
      <AppStore />
    </>
  );
}


export default App;
