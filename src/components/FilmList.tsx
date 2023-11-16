import { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { MongoClient } from 'mongodb'

const FilmList = () => {

  const fetchData = async () => {
    const mongoClient = new MongoClient('mongodb+srv://admin:jP6NPTlwDPmqWuu5@filmmanager.qexn43j.mongodb.net/Users?retryWrites=true&w=majority')

    try {
      await mongoClient.connect();
      const data = await mongoClient.db().collection('Users').find({}).toArray();
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      await mongoClient.close();
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

    
    const props = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translateX(-100%)' },
        delay: 1500, 
      });

  return (
    <animated.main className='mainFilmListContainer' style={props}>
        <span className='flexColumnCenter'>
            <div>Choose your list</div>
            <div>or find something new!</div>
        </span>
        
        
    </animated.main>
  )
}

export default FilmList