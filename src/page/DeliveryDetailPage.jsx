import { faArrowLeft, faDirections } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

function DeliveryDetailPage() {
    return (
        <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-800">Newa Express</h2>
            <h2 className="text-3xl font-semibold mb-6 text-gray-700">Overview:</h2>
            <p className="text-lg mb-6 text-gray-600">
                Unveiling Newa Express - Delivering the Authentic Essence of Newari Cuisine
            </p>
            <h2 className="text-3xl font-semibold mb-6 text-gray-700">Research:</h2>
            <p className="text-lg mb-4 text-gray-600">Our research encompassed an exploration of the cultural and culinary intricacies of Kathmandu:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li className="mb-2">
                    <span className="font-bold text-gray-700">Cultural Context:</span> Newari cuisine is more than just food; it's an integral part of the city's cultural tapestry. These dishes are treasured family recipes, passed down through generations and reserved for special occasions.
                </li>
                <li className="mb-2">
                    <span className="font-bold text-gray-700">Restaurant Experience:</span> We delved into the challenges faced by those who wished to dine at Newari restaurants, from the exasperation of finding parking spaces to the complexities of navigating the city's narrow alleys and streets to access these family-owned culinary gems.
                </li>
                <li className="mb-2">
                    <span className="font-bold text-gray-700">Regulatory Constraints:</span> We scrutinized the regulatory environment in Kathmandu, recognizing the stringent guidelines that impact both restaurant operations and the accessibility of Newari food.
                </li>
                <li className="mb-2">
                    <span className="font-bold text-gray-700">Customer Pain Points:</span> Through surveys and interviews, we unearthed common grievances, with the hassle of parking emerging as a prominent deterrent to indulging in Newari cuisine.
                </li>
                <li>
                    <span className="font-bold text-gray-700">Competitive Landscape:</span> An analysis of existing food delivery apps revealed that while some provided Newari food options, authenticity was often compromised.
                </li>
            </ul>

            <h2 className="text-3xl font-semibold mb-6 text-gray-700">Problem Statement:</h2>
            <p className="text-lg mb-6 text-gray-600">
                The scarcity of parking spaces in Kathmandu, exacerbated by stringent regulations, poses a significant barrier to individuals seeking to relish authentic Newari cuisine. These family-owned culinary treasures are typically nestled in the city's labyrinthine streets, making accessibility a formidable challenge.
            </p>

            <h2 className="text-3xl font-semibold mb-6 text-gray-700">Solution:</h2>
            <p className="text-lg mb-10 text-gray-600">
                Introducing Newa Express, a dedicated food delivery app that not only addresses the parking dilemma but also ensures an authentic Newari dining experience. We've curated a menu that respects the rich heritage and traditional recipes of Newari cuisine, delivering an entirely authentic culinary journey to your doorstep.
            </p>

            <p className="mt-10 font-bold text-3xl text-center text-gray-800">For Images: Check our Figma</p>

            <div className="flex justify-center mt-4">
                <button
                    className='bg-red-700 px-6 py-3 rounded-lg hover:bg-red-500 text-white text-lg transition duration-300'
                    onClick={() => {
                        window.open('https://www.figma.com/file/9qIDDgJFWmGqvCjL9jJnjh/Foodapp?type=design&node-id=0-1&mode=design&t=lFNTL6EbhrA3FACM-0', '_blank', 'noopener,noreferrer');
                    }}>Figma</button>
            </div>
            <div className='mt-10 mb-10 flex justify-center items-center space-x-2'>
                <p className="text-lg text-gray-600">Back to portfolio</p>
                <Link to={'/'} className="text-red-700 hover:text-red-500"><FontAwesomeIcon icon={faArrowLeft} />
                </Link>
            </div>

        </div>
    );
}

export default DeliveryDetailPage;
