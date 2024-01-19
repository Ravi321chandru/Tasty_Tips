import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './States.css'; // Import custom CSS;
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
const TamilNadu = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);


  //This is for use background only for home (FOR SPECIFIC STYLE WITH EXTERNAL CSS FILE)
  useEffect(() => {
    // Add the class to the body when the component mounts
    document.body.classList.add('other-body');

    // Remove the class when the component unmounts
    return () => {
      document.body.classList.remove('other-body');
    };
  }, []);

  const recipes = [
    {
      title: 'Chettinad Chicken Curry',
      ingredients: 'Chicken pieces, Onions, Tomatoes, Ginger-garlic paste, Chettinad spice blend (coriander, cumin, fennel seeds, peppercorns, cinnamon, cardamom, cloves), Curry leaves, Coconut milk, Oil, Salt',
      procedure: [
        'Heat oil in a pan, sauté chopped onions until golden brown.',
        'Add ginger-garlic paste and tomatoes, cook until tomatoes are soft.',
        'Add Chettinad spice blend, curry leaves, and chicken pieces. Cook until chicken is browned.',
        'Pour in coconut milk, cover, and simmer until chicken is cooked through.',
        'Adjust seasoning with salt. Serve hot with rice or parotta.',
      ],
      iconSrc: require('./Images/tn1.jpg'),
    },
    {
      title: 'Sambar',
      ingredients: 'Toor dal, Tamarind, Mixed vegetables (drumsticks, carrots, beans, pumpkin, brinjal), Sambar powder, Mustard seeds, Asafoetida, Curry leaves, Tomatoes, Onions, Oil, Salt',
      procedure: [
        'Cook toor dal until soft, mash it, and set aside.',
        'Soak tamarind in water, extract juice, and keep aside.',
        'Cook mixed vegetables, tomatoes, and onions with tamarind juice, sambar powder, and salt.',
        'In a separate pan, temper mustard seeds, asafoetida, and curry leaves in oil.',
        'Add the tempering to the cooked sambar. Simmer until flavors meld. Serve with rice.',
      ],
      iconSrc: require('./Images/tn2.jpg'),
    },
    {
      title: 'Pongal',
      ingredients: 'Rice, Split yellow moong dal, Ghee, Black pepper, Cumin seeds, Cashews, Ginger, Curry leaves, Salt',
      procedure: [
        'Cook rice and moong dal together until soft.',
        'In a pan, heat ghee and add cumin seeds, black pepper, cashews, ginger, and curry leaves.',
        'Add the tempering to the cooked rice and dal. Mix well.',
        'Season with salt. Serve hot.',
      ],
      iconSrc: require('./Images/tn3.jpg'),
    },
    {
      title: 'Idli and Sambar',
      ingredients: 'Idli batter, Urad dal, Sambar ingredients (toor dal, tamarind, sambar powder, vegetables, mustard seeds, asafoetida, curry leaves), Coconut chutney ingredients (grated coconut, green chilies, roasted gram, ginger, salt)',
      procedure: [
        'Steam idlis using idli batter and urad dal.',
        'Prepare sambar by cooking toor dal, tamarind juice, vegetables, and sambar powder.',
        'Temper mustard seeds, asafoetida, and curry leaves in oil; add to sambar.',
        'For coconut chutney, blend coconut, green chilies, roasted gram, ginger, and salt.',
        'Serve idlis with sambar and coconut chutney.',
      ],
      iconSrc: require('./Images/tn4.jpg'),
    },
    {
      title: 'Masala Dosa',
      ingredients: 'Dosa batter, Potatoes, Mustard seeds, Urad dal, Chana dal, Onions, Green chilies, Ginger, Turmeric powder, Curry leaves, Oil, Salt',
      procedure: [
        'Boil and mash potatoes, set aside.',
        'In a pan, temper mustard seeds, urad dal, chana dal, and curry leaves in oil.',
        'Add chopped onions, green chilies, ginger, and turmeric powder. Sauté until onions are golden.',
        'Add mashed potatoes, mix well. Stuff the dosas with this filling and cook until crispy.',
      ],
      iconSrc: require('./Images/tn5.avif'),
    },
    {
      title: 'Ven Pongal',
      ingredients: 'Rice, Split yellow moong dal, Ghee, Black pepper, Cumin seeds, Cashews, Ginger, Curry leaves, Salt',
      procedure: [
        'Cook rice and moong dal together until soft.',
        'In a pan, heat ghee and add cumin seeds, black pepper, cashews, ginger, and curry leaves.',
        'Add the tempering to the cooked rice and dal. Mix well.',
        'Season with salt. Serve hot.',
      ],
      iconSrc: require('./Images/tn6.jpg'),
    },
    {
      title: 'Kothu Parotta',
      ingredients: 'Parotta, Eggs, Onions, Tomatoes, Green chilies, Curry leaves, Ginger-garlic paste, Garam masala, Turmeric powder, Coriander leaves, Oil, Salt',
      procedure: [
        'Shred parottas into small pieces.',
        'Sauté chopped onions, green chilies, and curry leaves.',
        'Add tomatoes, ginger-garlic paste, and spices. Cook until tomatoes are soft.',
        'Push the mixture to one side, scramble eggs on the other side.',
        'Mix everything together, add shredded parottas. Cook until well combined.',
      ],
      iconSrc: require('./Images/tn7.jpg'),
    },
    {
      title: 'Rasam',
      ingredients: 'Tamarind, Tomatoes, Toor dal, Rasam powder, Mustard seeds, Cumin seeds, Asafoetida, Curry leaves, Coriander leaves, Garlic, Black pepper, Oil, Salt',
      procedure: [
        'Cook toor dal until soft, mash it, and set aside.',
        'Soak tamarind in water, extract juice, and keep aside.',
        'In a pot, add tamarind juice, chopped tomatoes, rasam powder, salt, and cook.',
        'In a separate pan, temper mustard seeds, cumin seeds, asafoetida, curry leaves, and crushed garlic in oil.',
        'Add the tempering to the rasam, garnish with coriander leaves. Serve hot.',
      ],
      iconSrc: require('./Images/tn8.avif'),
    },
    {
      title: 'Meen Kuzhambu (Fish Curry)',
      ingredients: 'Fish pieces, Tamarind, Coconut, Onions, Tomatoes, Sambar powder, Mustard seeds, Fenugreek seeds, Curry leaves, Garlic, Turmeric powder, Red chili powder, Oil, Salt',
      procedure: [
        'Soak tamarind in water, extract juice, and keep aside.',
        'Grind coconut, onions, tomatoes, and sambar powder into a paste.',
        'In a pan, heat oil, temper mustard seeds, fenugreek seeds, curry leaves, and garlic.',
        'Add the ground paste, tamarind juice, turmeric powder, red chili powder, and salt. Cook until oil separates.',
        'Add fish pieces, simmer until fish is cooked through. Serve with rice.',
      ],
      iconSrc: require('./Images/tn9.jpg'),
    },
    {
      title: 'Vada Curry',
      ingredients: 'Urad dal, Chana dal, Onions, Tomatoes, Ginger-garlic paste, Green chilies, Fennel seeds, Cinnamon, Cloves, Coriander powder, Red chili powder, Turmeric powder, Coriander leaves, Oil, Salt',
      procedure: [
        'Soak urad dal and chana dal, grind into a thick batter, and deep-fry small vadas.',
        'In a pan, sauté chopped onions until golden brown.',
        'Add ginger-garlic paste, tomatoes, green chilies, and spices. Cook until tomatoes are soft.',
        'In a separate pan, temper fennel seeds, cinnamon, and cloves.',
        'Add the tempering to the curry, add fried vadas, and simmer until flavors meld. Garnish with coriander leaves.',
      ],
      iconSrc: require('./Images/tn10.jpg')
    },
  ];

  const openPopup = (recipe) => {
    setSelectedCard(recipe);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedCard(null);
  };

  return (
    <div className="container mt-3 ml-2 mr-2">
      <Link to="/" className="back-link" style={{ textDecoration: 'none' }}>
        <span>&#8592;</span> Back to Home
      </Link>
      <h2 align="center" className="col mb-4">TamilNadu</h2>
      <h6 style={{fontWeight:'none'}} align="center" className="col mb-4">From the iconic dosas and sambar that grace breakfast tables to the intricate Chettinad curries that tantalize taste buds,<br/> Tamil Nadu's cuisine is a rich tapestry of tradition and innovation. Each dish narrates a story of cultural heritage,<br/> making every dining experience in Tamil Nadu a journey of exquisite taste and culinary history.</h6>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5">
        {recipes.map((recipe, index) => (
          <div key={index} className="col mb-4">
            <div className="card" onClick={() => openPopup(recipe)}>
              <div className="card-body">
                <div className="logo-part text-center">
                  <img src={recipe.iconSrc} alt={`Icon ${index + 1}`} className="img-fluid rounded-border_new" />
                </div>
                <div className="info-part text-center">
                  <h6 className="card-subtitle mb-2 text-muted">{recipe.title}</h6>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showPopup && selectedCard && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-card" onClick={(e) => e.stopPropagation()}>
            <div className="popup-card-body">
              <div className="recipe-details">
                <h3 style={{fontWeight:'bold'}}>{selectedCard.title}</h3>
                <h6 style={{color: 'black', fontWeight:'bold'}}>Ingredients:</h6>
                <p>{selectedCard.ingredients}</p><br/>
                <h6 style={{color: 'black', fontWeight:'bolder'}}>Procedure:</h6>
                <ol style={{ padding: '0', margin: '0', listStyleType: 'decimal', paddingLeft: '1em' }}>
                  {selectedCard.procedure.map((step, index) => (
                    <li key={index} style={{ textAlign: 'left' }}>{step}</li>
                  ))}
                </ol>
              </div>
              <button className="close-btn" onClick={closePopup}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TamilNadu;
