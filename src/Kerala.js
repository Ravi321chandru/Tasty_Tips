import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './States.css'; // Import custom CSS
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


const Kerala = () => {
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
      title: 'Appam with Ishtu',
      ingredients: 'Rice flour, Coconut milk, Sugar, Salt, Water, Potatoes, Carrots, Onions, Ginger, Green chilies, Curry leaves, Coconut oil',
      procedure: [
        'Mix rice flour, coconut milk, sugar, and salt to make a batter. Allow it to ferment.',
        'Cook potatoes, carrots, and onions in coconut milk with ginger, green chilies, and curry leaves.',
        'Prepare lacy appams using the fermented batter.',
        'Serve hot appams with the vegetable stew.',
        'Optionally, drizzle coconut oil on top for added flavor.'
      ],
      iconSrc: require('./Images/ke1.jpg')
    },
    {
      title: 'Kerala Sadya',
      ingredients: 'Avial, Thoran, Olan, Kaalan, Pachadi, Erissery, Sambar, Rasam, Payasam, Rice',
      procedure: [
        'Prepare various dishes like avial, thoran, olan, kaalan, pachadi, erissery, sambar, rasam, and payasam.',
        'Arrange them on a banana leaf.',
        'Serve with rice and enjoy the flavors of a traditional Kerala feast.',
        'Begin with sambar and rice, proceed to other dishes, and finish with payasam.',
        'Follow the traditional order of serving to enhance the dining experience.'
      ],
      iconSrc: require('./Images/ke2.png')
    },
    {
      title: 'Malabar Biriyani',
      ingredients: 'Basmati rice, Chicken, Onions, Tomatoes, Ginger-garlic paste, Garam masala, Green chilies, Mint leaves, Coriander leaves, Cashews, Raisins, Ghee',
      procedure: [
        'Soak basmati rice for a while and partially cook it.',
        'Prepare a masala with chicken, onions, tomatoes, ginger-garlic paste, and garam masala.',
        'Layer partially cooked rice and chicken masala in a biriyani pot.',
        'Garnish each layer with mint, coriander, fried cashews, and raisins.',
        'Cook on low heat until the biriyani is fully cooked and aromatic.',
        'Serve hot with raita.'
      ],
      iconSrc: require('./Images/ke3.png')
    },
    {
      title: 'Kerala Parotta with Chicken Curry',
      ingredients: 'All-purpose flour, Water, Salt, Chicken, Onions, Tomatoes, Ginger-garlic paste, Garam masala, Curry leaves, Coconut milk, Coconut oil',
      procedure: [
        'Make a soft and elastic dough with all-purpose flour, water, and salt.',
        'Divide the dough into balls and flatten them into thin discs.',
        'Cook on a griddle with coconut oil until golden brown and layered.',
        'Cook chicken with onions, tomatoes, ginger-garlic paste, garam masala, and curry leaves in coconut milk.',
        'Serve hot parottas with the flavorful chicken curry.',
        'Optionally, serve with raita for a complete meal.'
      ],
      iconSrc: require('./Images/ke4.png')
    },
    {
      title: 'Meen Curry',
      ingredients: 'Fish (preferably sardines or mackerel), Tamarind, Coconut, Shallots, Ginger, Garlic, Green chilies, Turmeric powder, Red chili powder, Mustard seeds, Curry leaves, Coconut oil',
      procedure: [
        'Grind coconut, shallots, ginger, garlic, green chilies, turmeric powder, and red chili powder into a fine paste.',
        'Cook fish with tamarind, the prepared masala paste, mustard seeds, curry leaves, and coconut oil.',
        'Simmer until the fish is cooked, and the curry reaches a thick consistency.',
        'Serve hot with steamed rice.',
        'Optionally, garnish with fresh coriander leaves before serving.'
      ],
      iconSrc: require('./Images/ke5.jpg')
    },
    {
      title: 'Karimeen Pollichathu',
      ingredients: 'Pearl Spot fish (Karimeen), Banana leaves, Shallots, Ginger, Garlic, Green chilies, Turmeric powder, Red chili powder, Curry leaves, Coconut oil',
      procedure: [
        'Clean and marinate the fish with turmeric powder, red chili powder, and salt.',
        'Sauté a mixture of shallots, ginger, garlic, green chilies, and curry leaves in coconut oil.',
        'Coat the fish with this mixture and wrap it in banana leaves.',
        'Steam or pan-fry the fish until it\'s cooked and the banana leaves impart flavor.',
        'Serve hot with steamed rice.'
      ],
      iconSrc: require('./Images/ke6.jpg')
    },
    {
      title: 'Kerala Beef Curry',
      ingredients: 'Beef, Onions, Tomatoes, Ginger-garlic paste, Green chilies, Coriander powder, Garam masala, Turmeric powder, Red chili powder, Curry leaves, Coconut oil',
      procedure: [
        'Cook beef with onions, tomatoes, ginger-garlic paste, green chilies, and spices.',
        'Add coriander powder, garam masala, turmeric powder, and red chili powder for flavor.',
        'Sauté in coconut oil until the beef is tender and the curry thickens.',
        'Garnish with curry leaves before serving.',
        'Enjoy this spicy and aromatic beef curry with rice or parotta.'
      ],
      iconSrc: require('./Images/ke7.png')
    },
    {
      title: 'Palada Payasam',
      ingredients: 'Palada (rice flakes), Milk, Sugar, Ghee, Cashews, Raisins, Cardamom',
      procedure: [
        'Cook palada in milk until it becomes soft and the mixture thickens.',
        'Add sugar and stir until it dissolves.',
        'In a separate pan, sauté cashews and raisins in ghee until golden.',
        'Add the sautéed nuts to the payasam and mix well.',
        'Garnish with cardamom for fragrance.',
        'Serve warm or chilled as a delightful dessert.'
      ],
      iconSrc: require('./Images/ke8.jpg')
    },
    {
      title: 'Avial',
      ingredients: 'Mixed vegetables (carrots, beans, pumpkin, drumsticks), Coconut, Green chilies, Cumin seeds, Curd, Curry leaves, Coconut oil',
      procedure: [
        'Cook mixed vegetables until they are tender yet retain their shape.',
        'Grind coconut, green chilies, and cumin seeds into a coarse paste.',
        'Mix the ground paste with curd and add it to the cooked vegetables.',
        'Season with curry leaves tempered in coconut oil.',
        'Serve avial as a side dish with rice.'
      ],
      iconSrc: require('./Images/ke9.jpg')
    },
    {
      title: 'Kerala Banana Chips',
      ingredients: 'Raw green bananas, Turmeric powder, Salt, Coconut oil',
      procedure: [
        'Peel and thinly slice raw green bananas using a mandoline or knife.',
        'Soak the slices in a turmeric-salt water solution for a few minutes.',
        'Deep-fry the banana slices in coconut oil until golden brown and crisp.',
        'Drain excess oil, and let the chips cool.',
        'Enjoy these crispy banana chips as a snack or side dish.'
      ],
      iconSrc: require('./Images/ke10.png')
    }
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
      <h2 align="center" className="col mb-4">Kerala</h2>
      <h6 align="center" className="col mb-4">Shines through the aromatic avial, a medley of mixed vegetables, and the flavorful malabar biriyani that captivates the senses. <br />From the spicy meen curry, a celebration of coastal flavors, to the sweet notes of palada payasam, <br />Kerala's cuisine is a delightful journey through diverse tastes and textures.</h6>
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
                <h3 style={{ fontWeight: 'bold' }}>{selectedCard.title}</h3>
                <h6 style={{ color: 'black', fontWeight: 'bold' }}>Ingredients:</h6>
                <p>{selectedCard.ingredients}</p><br />
                <h6 style={{ color: 'black', fontWeight: 'bolder' }}>Procedure:</h6>
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

export default Kerala;
