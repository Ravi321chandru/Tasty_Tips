import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './States.css'; // Import custom CSS
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Maharashtra = () => {
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
            title: 'Pav Bhaji',
            ingredients: 'Potatoes, Cauliflower, Peas, Onions, Tomatoes, Capsicum, Pav Bhaji masala, Butter, Pav (bread rolls), Coriander leaves',
            procedure: [
                'Boil and mash potatoes, cauliflower, and peas.',
                'Sauté onions, tomatoes, and capsicum in butter until soft.',
                'Add boiled vegetables and pav bhaji masala, cook until well blended.',
                'Serve hot with buttered pav.',
                'Garnish with chopped coriander leaves.'
            ],
            iconSrc: require('./Images/ma1.png')
        },
        {
            title: 'Poha',
            ingredients: 'Flattened rice (Poha), Mustard seeds, Cumin seeds, Onions, Peas, Turmeric powder, Green chilies, Coriander leaves, Lemon',
            procedure: [
                'Wash poha and set aside.',
                'In a pan, temper mustard seeds, cumin seeds, and sauté onions, green chilies, and peas.',
                'Add turmeric powder, mix in the washed poha, and cook until heated through.',
                'Garnish with coriander leaves.',
                'Serve with lemon wedges.'
            ],
            iconSrc: require('./Images/ma2.png')
        },
        {
            title: 'Misal Pav',
            ingredients: 'Sprouted moth beans, Onions, Tomatoes, Farsan, Pav, Misal masala, Tamarind, Coriander leaves',
            procedure: [
                'Cook sprouted moth beans with misal masala, onions, and tomatoes.',
                'Serve hot with pav, topped with farsan and chopped coriander leaves.',
                'Optionally, drizzle tamarind chutney.',
                'Enjoy this spicy and flavorful Maharashtrian dish.'
            ],
            iconSrc: require('./Images/ma3.png')
        },
        {
            title: 'Vada Pav',
            ingredients: 'Pav (bread rolls), Batata vada (potato patties), Green chutney, Garlic chutney',
            procedure: [
                'Place a batata vada inside a pav.',
                'Apply green chutney and garlic chutney as per taste.',
                'Serve vada pav hot.',
                'A popular street food, it\'s simple yet delicious.'
            ],
            iconSrc: require('./Images/ma4.png')
        },
        {
            title: 'Puran Poli',
            ingredients: 'Chana dal, Jaggery, Wheat flour, Cardamom, Nutmeg, Ghee',
            procedure: [
                'Cook chana dal and jaggery to make a sweet filling (puran).',
                'Make wheat flour dough, stuff with puran, and roll into polis.',
                'Cook on a griddle with ghee until golden brown.',
                'Serve puran poli warm.',
                'A festive treat enjoyed during celebrations.'
            ],
            iconSrc: require('./Images/ma5.png')
        },
        {
            title: 'Sabudana Khichdi',
            ingredients: 'Sabudana (Tapioca pearls), Peanuts, Potatoes, Green chilies, Cumin seeds, Ghee, Lemon, Coriander leaves',
            procedure: [
                'Soak sabudana in water until it becomes soft.',
                'In a pan, temper cumin seeds in ghee, add chopped green chilies, and sauté potatoes.',
                'Mix in soaked sabudana and peanuts, cook until everything is well combined.',
                'Squeeze lemon, garnish with coriander leaves, and serve hot.',
                'A popular fasting dish with a delightful blend of textures.'
            ],
            iconSrc: require('./Images/ma6.png')
        },
        {
            title: 'Kothimbir Vadi',
            ingredients: 'Besan (Gram flour), Coriander leaves, Ginger, Green chilies, Sesame seeds, Mustard seeds, Asafoetida, Oil',
            procedure: [
                'Mix besan, chopped coriander leaves, ginger, green chilies, sesame seeds, and salt.',
                'Shape into a cylindrical roll and steam until cooked.',
                'Cut into slices and temper with mustard seeds, asafoetida, and curry leaves in oil.',
                'Serve kothimbir vadi as a savory snack.',
                'Crispy on the outside, soft on the inside.'
            ],
            iconSrc: require('./Images/ma7.png')
        },
        {
            title: 'Bharli Vangi (Stuffed Eggplant)',
            ingredients: 'Small eggplants, Groundnut powder, Coconut, Jaggery, Tamarind, Goda masala, Mustard seeds, Curry leaves',
            procedure: [
                'Slit eggplants and stuff with a mixture of groundnut powder, coconut, jaggery, tamarind, and goda masala.',
                'Cook the stuffed eggplants until tender.',
                'Season with a tempering of mustard seeds and curry leaves.',
                'Serve bharli vangi with bhakri or rice.',
                'A flavorful dish with a perfect balance of sweet and spicy.'
            ],
            iconSrc: require('./Images/ma8.png')
        },
        {
            title: 'Batata Vada Pav',
            ingredients: 'Pav (bread rolls), Batata vada (potato patties), Green chutney, Garlic chutney, Tamarind chutney',
            procedure: [
                'Place a batata vada inside a pav.',
                'Apply green chutney, garlic chutney, and tamarind chutney.',
                'Serve batata vada pav hot.',
                'A variant of vada pav with additional chutneys.',
                'Enjoy the burst of flavors in every bite.'
            ],
            iconSrc: require('./Images/ma9.png')
        },
        {
            title: 'Bhakri with Pitla',
            ingredients: 'Jowar flour, Besan (Gram flour), Onion, Green chilies, Ginger, Garlic, Mustard seeds, Turmeric powder, Ghee',
            procedure: [
                'Mix jowar flour and besan, add chopped onion, green chilies, ginger, and garlic.',
                'Knead into a dough and make round bhakris.',
                'Cook on a griddle with ghee until golden brown.',
                'Prepare pitla by cooking besan with water, turmeric powder, and mustard seeds.',
                'Serve hot bhakri with pitla.',
                'A traditional Maharashtrian meal, simple yet wholesome.'
            ],
            iconSrc: require('./Images/ma10.png')
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
            <h2 align="center" className="col mb-4">Maharashtra</h2>
            <h6 align="center" className="col mb-4">Embark on a gastronomic odyssey through Maharashtra, where the streetwise vada pav and <br />the festive puran poli epitomize the state's diverse culinary landscape. Indulge in the fiery <br />misal pav or relish the comforting bhakri with pitla</h6>
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

export default Maharashtra;
