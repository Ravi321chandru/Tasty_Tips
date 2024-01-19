import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './States.css'; // Import custom CSS
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Punjab = () => {
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
            title: 'Butter Chicken',
            ingredients: 'Chicken, Butter, Tomato puree, Cream, Ginger-garlic paste, Garam masala, Kasuri methi, Green chilies',
            procedure: [
                'Marinate chicken in yogurt, ginger-garlic paste, and spices.',
                'Cook chicken in a tomato and cream-based gravy.',
                'Finish with a dollop of butter, garam masala, and crushed kasuri methi.',
                'Garnish with green chilies and serve hot.',
                'A rich and indulgent Punjabi classic.'
            ],
            iconSrc: require('./Images/pu1.png')
        },
        {
            title: 'Sarson da Saag with Makki di Roti',
            ingredients: 'Mustard greens, Spinach, Cornmeal (Makki flour), Ghee, Onions, Green chilies',
            procedure: [
                'Cook mustard greens and spinach, then blend into a coarse puree.',
                'Mix with makki flour to make rotis.',
                'Cook the rotis on a griddle with ghee until golden brown.',
                'Serve hot with a dollop of ghee.',
                'A traditional Punjabi winter delicacy.'
            ],
            iconSrc: require('./Images/pu2.png')
        },
        {
            title: 'Chole Bhature',
            ingredients: 'Chickpeas, Onions, Tomatoes, Green chilies, Chole masala, All-purpose flour, Yogurt, Baking soda',
            procedure: [
                'Cook chickpeas in a spiced tomato-onion gravy.',
                'Make a soft dough with all-purpose flour, yogurt, and baking soda.',
                'Roll out into bhaturas and deep-fry until puffed.',
                'Serve hot bhaturas with spicy chole.',
                'A popular street food enjoyed across Punjab.'
            ],
            iconSrc: require('./Images/pu3.png')
        },
        {
            title: 'Paneer Tikka',
            ingredients: 'Paneer, Yogurt, Ginger-garlic paste, Red chili powder, Garam masala, Lemon juice, Capsicum, Onions',
            procedure: [
                'Marinate paneer and vegetables in a mixture of yogurt and spices.',
                'Skewer and grill until charred.',
                'Serve hot with mint chutney.',
                'Garnish with lemon wedges.',
                'A flavorful and appetizing Punjabi snack.'
            ],
            iconSrc: require('./Images/pu4.png')
        },
        {
            title: 'Dal Makhani',
            ingredients: 'Urad dal, Rajma, Tomatoes, Cream, Butter, Ginger-garlic paste, Garam masala',
            procedure: [
                'Cook urad dal and rajma until soft.',
                'Blend tomatoes into a puree.',
                'Combine cooked dal, tomato puree, and spices.',
                'Simmer on low heat, adding cream and butter.',
                'Garnish with a dollop of butter and a sprinkle of garam masala.',
                'Serve hot with rice or naan.'
            ],
            iconSrc: require('./Images/pu5.png')
        },
        {
            title: 'Aloo Paratha',
            ingredients: 'Potatoes, Whole wheat flour, Ghee, Green chilies, Coriander leaves, Cumin seeds',
            procedure: [
                'Boil and mash potatoes, mix with chopped green chilies, coriander leaves, and cumin seeds.',
                'Make a soft dough with whole wheat flour.',
                'Stuff the dough with the potato mixture and roll out into parathas.',
                'Cook on a griddle with ghee until golden brown.',
                'Serve hot with yogurt or pickle.',
                'A popular Punjabi breakfast option.'
            ],
            iconSrc: require('./Images/pu6.png')
        },
        {
            title: 'Murgh Makhani (Chicken Butter Masala)',
            ingredients: 'Chicken, Butter, Tomato puree, Cream, Ginger-garlic paste, Garam masala, Kasuri methi',
            procedure: [
                'Marinate chicken in yogurt, ginger-garlic paste, and spices.',
                'Cook in a tomato and cream-based gravy.',
                'Finish with a generous amount of butter and kasuri methi.',
                'Serve hot with naan or rice.',
                'A creamy and succulent chicken dish.'
            ],
            iconSrc: require('./Images/pu7.png')
        },
        {
            title: 'Punjabi Kadhi Pakora',
            ingredients: 'Besan (Gram flour), Yogurt, Onions, Mustard seeds, Fenugreek seeds, Curd, Turmeric powder',
            procedure: [
                'Make a batter with besan and yogurt, add chopped onions.',
                'Fry small fritters (pakoras) and set aside.',
                'Cook curd and besan mixture with mustard seeds and fenugreek seeds.',
                'Add pakoras and simmer until well blended.',
                'Serve hot with steamed rice.',
                'A tangy and flavorful Punjabi dish.'
            ],
            iconSrc: require('./Images/pu8.png')
        },
        {
            title: 'Saag Meat',
            ingredients: 'Mustard greens, Spinach, Mutton, Onions, Tomatoes, Garam masala, Ginger-garlic paste',
            procedure: [
                'Cook mustard greens, spinach, and mutton until tender.',
                'Blend into a coarse puree.',
                'Cook onions and tomatoes with ginger-garlic paste.',
                'Add the puree and mutton, simmer until well cooked.',
                'Garnish with garam masala.',
                'Serve saag meat with makki di roti.'
            ],
            iconSrc: require('./Images/pu9.png')
        },
        {
            title: 'Pinni',
            ingredients: 'Whole wheat flour, Ghee, Jaggery, Almonds, Cardamom, Desiccated coconut',
            procedure: [
                'Roast whole wheat flour in ghee until golden brown.',
                'Add jaggery, crushed almonds, and cardamom.',
                'Shape into round ladoos (pinnis).',
                'Garnish with desiccated coconut.',
                'Enjoy these sweet and nutty treats.',
                'Often made during festivals in Punjab.'
            ],
            iconSrc: require('./Images/pu10.png')
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
            <h2 align="center" className="col mb-4">Punjab</h2>
            <h6 align="center" className="col mb-4">Explore Punjab's vibrant gastronomic palette, where the alluring aroma of butter-kissed dal <br />makhani and the wholesome charm of sarson da saag with makki di roti paint a vivid culinary canvas.</h6>
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

export default Punjab;
