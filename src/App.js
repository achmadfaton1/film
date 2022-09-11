import NavigationBar from './components/NavigationBar';
import Superhero from './components/Superhero';
import Trending from './components/Trending';

import "./style/landingPage.css"

function App() {
  return (
    <div>
      <div className="myBg">
        <header>
          <div>
            <NavigationBar />
          </div>
        </header>
        <main>
          <div>
            <Trending />
          </div>
        </main>
      </div>
      <div className='superHero'>
        <Superhero />
      </div>

    </div>
  );
}

export default App;
