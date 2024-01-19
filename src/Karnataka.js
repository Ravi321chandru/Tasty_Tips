import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './States.css'; // Import custom CSS
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


const Karnataka = () => {
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
            title: 'Bisi Bele Bath',
            ingredients: 'Rice, Toor dal, Vegetables (carrots, beans, peas), Tamarind, Bisi Bele Bath powder, Jaggery, Ghee, Mustard seeds, Curry leaves',
            procedure: [
                'Cook rice and toor dal together until soft.',
                'In a separate pot, cook vegetables, tamarind, and bisi bele bath powder until well combined.',
                'Mix the vegetable mixture with the cooked rice and dal.',
                'Season with a tempering of mustard seeds and curry leaves in ghee.',
                'Optionally, garnish with chopped coriander leaves.'
            ],
            iconSrc: require('./Images/ka1.jpg'),
        },
        {
            title: 'Mysore Pak',
            ingredients: 'Besan (Gram flour), Ghee, Sugar, Water',
            procedure: [
                'Mix besan with ghee to form a smooth batter.',
                'In a pan, heat sugar and water to form a syrup.',
                'Add the besan batter to the syrup and cook until it thickens.',
                'Pour the mixture into a greased tray and let it cool.',
                'Cut into squares and enjoy the rich and sweet Mysore Pak.'
            ],
            iconSrc: require('./Images/ka2.png')
        },
        {
            title: 'Neer Dosa with Coconut Chutney',
            ingredients: 'Rice, Coconut, Poha (Beaten rice), Salt, Water',
            procedure: [
                'Grind rice, coconut, and poha into a smooth batter.',
                'Add water to achieve a thin consistency.',
                'Make thin dosas on a hot griddle.',
                'Serve neer dosas with coconut chutney.',
                'Optionally, temper the chutney with mustard seeds and curry leaves.'
            ],
            iconSrc: require('./Images/ka3.png')
        },
        {
            title: 'Ragi Mudde',
            ingredients: 'Ragi flour (Finger millet), Water, Salt',
            procedure: [
                'Boil water and add ragi flour gradually, stirring continuously to avoid lumps.',
                'Cook until the mixture thickens and forms a soft dough.',
                'Shape the dough into round balls (mudde).',
                'Serve ragi mudde with sambar, dal, or chutney.'
            ],
            iconSrc: require('./Images/ka4.png')
        },
        {
            title: 'Akki Roti with Coconut Chutney',
            ingredients: 'Rice flour, Water, Onions, Green chilies, Coriander leaves, Salt, Oil',
            procedure: [
                'Mix rice flour with water to form a soft dough.',
                'Add chopped onions, green chilies, coriander leaves, and salt to the dough.',
                'Make round rotis on a hot griddle.',
                'Cook until both sides are golden brown.',
                'Serve akki roti with coconut chutney.'
            ],
            iconSrc: require('./Images/ka5.png')
        },
        {
            title: 'Udupi Sambar',
            ingredients: 'Toor dal, Tamarind, Vegetables (drumsticks, pumpkin, brinjal), Udupi Sambar powder, Jaggery, Mustard seeds, Curry leaves, Ghee',
            procedure: [
                'Cook toor dal until soft and mash it.',
                'Cook vegetables, tamarind, and Udupi Sambar powder until tender.',
                'Add mashed dal and jaggery to the vegetable mixture.',
                'Season with a tempering of mustard seeds and curry leaves in ghee.',
                'Simmer until flavors meld, and serve with rice.'
            ],
            iconSrc: require('./Images/ka6.png')
        },
        {
            title: 'Mangalorean Fish Curry',
            ingredients: 'Fish (preferably kingfish or pomfret), Coconut, Tamarind, Shallots, Garlic, Red chili powder, Turmeric powder, Mustard seeds, Curry leaves, Coconut oil',
            procedure: [
                'Grind coconut, shallots, garlic, red chili powder, and turmeric into a fine paste.',
                'Cook fish with tamarind, the prepared masala paste, mustard seeds, and curry leaves in coconut oil.',
                'Simmer until the fish is cooked and the curry reaches a thick consistency.',
                'Serve hot with rice.'
            ],
            iconSrc: require('./Images/ka7.png')
        },
        {
            title: 'Goli Baje',
            ingredients: 'Maida (All-purpose flour), Curd, Green chilies, Ginger, Curry leaves, Baking soda, Salt, Oil',
            procedure: [
                'Mix maida, curd, chopped green chilies, ginger, curry leaves, baking soda, and salt to form a thick batter.',
                'Drop spoonfuls of batter into hot oil and fry until golden brown.',
                'Serve goli baje hot with coconut chutney.'
            ],
            iconSrc: require('./Images/ka8.png')
        },
        {
            title: 'Ennegai (Stuffed Brinjal Curry)',
            ingredients: 'Small brinjals, Groundnuts, Sesame seeds, Jaggery, Tamarind, Red chili powder, Turmeric powder, Mustard seeds, Curry leaves, Oil',
            procedure: [
                'Slit brinjals and stuff them with a mixture of groundnuts, sesame seeds, jaggery, tamarind, red chili powder, and turmeric.',
                'Cook the stuffed brinjals until tender.',
                'Season with a tempering of mustard seeds and curry leaves in oil.',
                'Serve ennegai with rice or roti.'
            ],
            iconSrc: require('./Images/ka9.png')
        },
        {
            title: 'Huli (Karnataka-style Sambar)',
            ingredients: 'Toor dal, Tamarind, Vegetables (pumpkin, drumsticks, beans), Huli Pudi (Sambar powder), Jaggery, Mustard seeds, Curry leaves, Ghee',
            procedure: [
                'Cook toor dal until soft and mash it.',
                'Cook vegetables, tamarind, and Huli Pudi until tender.',
                'Add mashed dal and jaggery to the vegetable mixture.',
                'Season with a tempering of mustard seeds and curry leaves in ghee.',
                'Simmer until flavors meld, and serve with rice.'
            ],
            iconSrc: require('./Images/ka10.png')
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
            <h2 align="center" className="col mb-4">Karnataka</h2>
            <h6 align="center" className="col mb-4">Journey through Karnataka's culinary realm, where the delicate neer dosa with coconut chutney and the earthy ragi<br /> mudde with sambar showcase the state's rich tapestry of tastes. Whether enjoying the aromatic bisi bele <br />bath or savoring the simplicity of akki roti with coconut chutney</h6>
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

export default Karnataka;
