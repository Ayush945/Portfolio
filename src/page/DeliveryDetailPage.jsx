import { faArrowLeft, faDirections } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

function DeliveryDetailPage() {
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Newa Express</h2>
            <h2 className="text-2xl font-bold mb-4">Overview:</h2>
            <p className="text-lg">
                Unveiling Newa Express - Delivering the Authentic Essence of Newari Cuisine
            </p>
            <h2 className="text-2xl font-bold mb-4">Research:</h2>
            <p className="text-lg">Our research encompassed an exploration of the cultural and culinary intricacies of Kathmandu:</p>
            <ul className="list-disc pl-4">
                <li className="text-lg">
                    Cultural Context: Newari cuisine is more than just food; it's an integral part of the city's cultural tapestry. These dishes are treasured family recipes, passed down through generations and reserved for special occasions.
                </li>
                <li className="text-lg">
                    Restaurant Experience: We delved into the challenges faced by those who wished to dine at Newari restaurants, from the exasperation of finding parking spaces to the complexities of navigating the city's narrow alleys and streets to access these family-owned culinary gems.
                </li>
                <li className="text-lg">
                    Regulatory Constraints: We scrutinized the regulatory environment in Kathmandu, recognizing the stringent guidelines that impact both restaurant operations and the accessibility of Newari food.
                </li>
                <li className="text-lg">
                    Customer Pain Points: Through surveys and interviews, we unearthed common grievances, with the hassle of parking emerging as a prominent deterrent to indulging in Newari cuisine.
                </li>
                <li className="text-lg">
                    Competitive Landscape: An analysis of existing food delivery apps revealed that while some provided Newari food options, authenticity was often compromised.
                </li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Problem Statement:</h2>
            <p className="text-lg">
                The scarcity of parking spaces in Kathmandu, exacerbated by stringent regulations, poses a significant barrier to individuals seeking to relish authentic Newari cuisine. These family-owned culinary treasures are typically nestled in the city's labyrinthine streets, making accessibility a formidable challenge.
            </p>

            <h2 className="text-2xl font-bold mb-4">Solution:</h2>
            <p className="text-lg">
                Introducing Newa Express, a dedicated food delivery app that not only addresses the parking dilemma but also ensures an authentic Newari dining experience. We've curated a menu that respects the rich heritage and traditional recipes of Newari cuisine, delivering an entirely authentic culinary journey to your doorstep.
            </p>

            <p className="mt-10 font-bold text-3xl">For Images: Check our Figma</p>

            <button
                className=' bg-red-700 p-2 rounded-lg mt-4 hover:bg-red-400 text-white'
                onClick={() => {
                    window.open('https://www.figma.com/file/9qIDDgJFWmGqvCjL9jJnjh/Foodapp?type=design&node-id=0-1&mode=design&t=lFNTL6EbhrA3FACM-0', '_blank', 'noopener,noreferrer');
                }}>Figma</button>
            <div className='mt-10 mb-10'>
                <p>Go back</p>
                <Link to={'/'}> <FontAwesomeIcon icon={faArrowLeft} /></Link>
            </div>

        </div >
    );
}

export default DeliveryDetailPage;
