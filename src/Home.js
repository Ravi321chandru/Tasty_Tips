import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Home.css'; // Import custom CSS
import { useEffect } from 'react';



const Home = () => {
  const states = [
    {
      title: 'TamilNadu',
      iconSrc: require('./Images/TamilNadu.jpg'),
    },
    {
      title: 'Kerala',
      iconSrc: require('./Images/Kerala.jpg'),
    },
    {
      title: 'Punjab',
      iconSrc: require('./Images/Punjab.jpg'),
    },
    {
      title: 'Rajasthan',
      iconSrc: require('./Images/Rajasthan.jpg'),
    },
    {
      title: 'Karnataka',
      iconSrc: require('./Images/Karnataka.jpg'),
    },
    {
      title: 'Maharashtra',
      iconSrc: require('./Images/Maharashtra.jpg'),
    },
  ];

  //This is for use background only for home (FOR SPECIFIC STYLE WITH EXTERNAL CSS FILE)
  useEffect(() => {
    // Add the class to the body when the component mounts
    document.body.classList.add('home-body');

    // Remove the class when the component unmounts
    return () => {
      document.body.classList.remove('home-body');
    };
  }, []);
  return (
    <div  className='container mt-3'>
      <h1 align="center" className="col mb-4" style={{fontWeight: 'bold'}}>TASTY TIPS</h1>
      <h6 style={{fontWeight: 'bold'}} align="center" className="col mb-4">Tasty Tips is designed to simplify your cooking experience and guides you through <br/>the art of crafting delicious dishes from various regions. Simplify meal planning, uncover new tastes and <br/> enjoy the process of bringing regional specialties to your table with this user-friendly culinary resource.</h6>
      <div align="center" className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        {states.map((state, index) => (
          <div key={index} className="col mb-4">
            <Link to={`/${state.title}`} style={{ textDecoration: 'none', color: 'inherit', width:'65%'}}  className="card" >
              <div className="card-body" style={{overflow: 'hidden'}}>
                <div className="logo-part text-center">
                  <img  src={state.iconSrc} alt={`Icon ${index + 1}`} className="img-fluid home-body-new" />
                </div>
                <div className="info-part text-center">
                  <h6 className="card-subtitle mb-2 text-muted">{state.title}</h6>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
