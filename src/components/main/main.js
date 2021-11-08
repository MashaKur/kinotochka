import './main.css';
import News from '../news/news'
import Novelty from '../novelty/novelty';
import Popular from '../popular/popular';
import Updates from '../updates/updates';

function Main() {
  return (
    <main className='main'>
        <div className='main-container'>
            <News/>
            <Novelty/>
            <Popular/>
            <Updates/>
        </div>

    </main>
  );
}

export default Main;
