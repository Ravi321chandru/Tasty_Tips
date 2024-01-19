import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './States.css'; // Import custom CSS
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Rajasthan = () => {
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
      title: 'Dal Baati Churma',
      ingredients: 'Whole wheat flour, Ghee, Toor dal, Chana dal, Urad dal, Ghee, Jaggery',
      procedure: [
        'Knead whole wheat flour with ghee to make baatis.',
        'Bake the baatis until golden brown.',
        'Cook a mix of toor dal, chana dal, and urad dal.',
        'Crush the baatis and mix with ghee to make churma.',
        'Serve hot baatis with dal and churma.',
        'A traditional Rajasthani dish with a perfect blend of flavors.'
      ],
      iconSrc: require('./Images/ra.png')
    },
    {
      title: 'Laal Maas',
      ingredients: 'Mutton, Mathania red chili, Yogurt, Onions, Garlic, Ghee, Coriander leaves',
      procedure: [
        'Marinate mutton in yogurt and Mathania red chili.',
        'Cook mutton with onions, garlic, and ghee until tender.',
        'Garnish with chopped coriander leaves.',
        'Serve hot with bajra roti.',
        'A spicy and iconic Rajasthani meat dish.'
      ],
      iconSrc: require('./Images/ra2.png')
    },
    {
      title: 'Gatte ki Sabzi',
      ingredients: 'Besan (Gram flour), Yogurt, Onions, Tomatoes, Garam masala, Mustard seeds, Asafoetida',
      procedure: [
        'Mix besan, yogurt, and spices to form gatte.',
        'Boil the gatte and cut into pieces.',
        'Cook a gravy with onions, tomatoes, and spices.',
        'Add gatte to the gravy and simmer.',
        'Serve hot with steamed rice or roti.',
        'A flavorful Rajasthani vegetarian delicacy.'
      ],
      iconSrc: require('./Images/ra3.png')
    },
    {
      title: 'Ker Sangri',
      ingredients: 'Ker (Wild berries), Sangri (Beans), Onions, Tomatoes, Red chili powder, Cumin seeds, Mustard seeds',
      procedure: [
        'Soak ker and sangri overnight.',
        'Cook with onions, tomatoes, and spices.',
        'Temper with cumin seeds and mustard seeds.',
        'Serve as a side dish with bajra roti.',
        'A unique and regional Rajasthani specialty.'
      ],
      iconSrc: require('./Images/ra4.png')
    },
    {
      title: 'Mawa Kachori',
      ingredients: 'Mawa (Khoya), All-purpose flour, Ghee, Dry fruits, Sugar syrup',
      procedure: [
        'Mix mawa with dry fruits and stuff into kachori dough.',
        'Deep-fry until golden brown.',
        'Dip in sugar syrup.',
        'Garnish with more dry fruits.',
        'Enjoy these sweet and rich kachoris.',
        'A popular Rajasthani dessert.'
      ],
      iconSrc: require('./Images/ra5.png')
    },
    {
      title: 'Rajasthani Mirchi Vada',
      ingredients: 'Green chilies, Besan (Gram flour), Hing (Asafoetida), Fennel seeds, Turmeric powder',
      procedure: [
        'Slit green chilies lengthwise.',
        'Stuff with a mixture of besan, hing, fennel seeds, and turmeric powder.',
        'Deep-fry until golden brown.',
        'Serve hot with chutney.',
        'A spicy and crunchy Rajasthani snack.',
        'Enjoy the burst of flavors with each bite.'
      ],
      iconSrc: require('./Images/ra6.png')
    },
    {
      title: 'Rajasthani Kadhi',
      ingredients: 'Besan (Gram flour), Yogurt, Mustard seeds, Methi seeds, Onions, Curry leaves',
      procedure: [
        'Mix besan and yogurt to make a smooth batter.',
        'Cook with mustard seeds, methi seeds, onions, and curry leaves.',
        'Simmer until it thickens.',
        'Serve hot with steamed rice.',
        'A tangy and flavorful Rajasthani kadhi.',
        'A comforting dish enjoyed with rice or roti.'
      ],
      iconSrc: require('./Images/ra7.png')
    },
    {
      title: 'Pyaaz Kachori',
      ingredients: 'Onions, All-purpose flour, Ghee, Fennel seeds, Coriander powder, Red chili powder',
      procedure: [
        'Make a dough with all-purpose flour and ghee.',
        'Stuff with a mixture of finely chopped onions and spices.',
        'Deep-fry until golden brown.',
        'Serve hot with mint chutney.',
        'Enjoy these flaky and savory kachoris.',
        'A popular street food in Rajasthan.'
      ],
      iconSrc: require('./Images/ra8.png')
    },
    {
      title: 'Moong Dal Halwa',
      ingredients: 'Moong dal, Ghee, Sugar, Milk, Cardamom, Almonds',
      procedure: [
        'Roast moong dal until golden brown.',
        'Grind into a coarse powder.',
        'Cook with ghee, sugar, and milk until thickened.',
        'Add cardamom and garnish with almonds.',
        'Serve warm.',
        'A rich and decadent Rajasthani dessert.'
      ],
      iconSrc: require('./Images/ra9.png')
    },
    {
      title: 'Rajasthani Aloo Pyaaz Kachori',
      ingredients: 'Potatoes, Onions, All-purpose flour, Ghee, Fennel seeds, Coriander powder, Red chili powder',
      procedure: [
        'Make a dough with all-purpose flour and ghee.',
        'Stuff with a mixture of mashed potatoes, finely chopped onions, and spices.',
        'Deep-fry until golden brown.',
        'Serve hot with tamarind chutney.',
        'A delicious and hearty snack.',
        'Enjoy the crispy exterior and flavorful filling.'
      ],
      iconSrc: require('./Images/ra10.png')
    }
  ]


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
      <h2 align="center" className="col mb-4">Rajasthan</h2>
      <h6 align="center" className="col mb-4">Step into Rajasthan's tasty landscape, where the fiery laal maas and the festive dal <br />baati churma showcase the state's royal and rustic flavors. Whether indulging in the crispy pyaaz<br /> kachori or savoring the sweet richness of mawa kachori</h6>
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

export default Rajasthan;
