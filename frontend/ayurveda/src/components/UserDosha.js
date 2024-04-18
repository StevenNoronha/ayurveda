import React, { useState, useEffect } from 'react'
import kapha from '../assests/kapha.png'
import pitta from '../assests/pitta.png'
import vata from '../assests/vata.png'

function UserDosha() {
    const [dosha, setDosha] = useState("");
    const authToken = localStorage.getItem('authToken');

    const loadData = async () => {
        let response = await fetch(global.url + "api/mealplan", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${authToken}`
            }
        });
        response = await response.json();
        setDosha(response[2]);
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className='container flexUtil'>
            <div className='container info-card-con'>
                {dosha === "Kapha" &&
                    <div className='container dosha-card'>
                        <img src={kapha} width={275} className="dosha-logo" alt='dosha-logo' />
                        <div className='dcardinner'>
                        <p><h1>Your Dosha is Kapha: </h1>The Vata dosha regulates bodily movement, including muscles, tissues, and cell mobility, along with blood and lymphatic fluid circulation. It also manages the nervous system, facilitating brain-body communication pathways. Vata serves as the vital force mediating information flow between the brain and body parts.</p>
                        <h2>Points to Follow: </h2>
                        <ul>
                        <li>Opt for a diet that is light, warm, and spicy to counteract Kapha's heaviness.</li>
                        <li>Stay active with regular exercise to stimulate metabolism and prevent stagnation.</li>
                        <li>Maintain a dynamic daily routine to avoid lethargy and promote energy flow.</li>
                        <li>Seek variety and stimulation to prevent boredom and stagnation.</li>
                        <li>Foster emotional warmth and enthusiasm, avoiding tendencies toward attachment and possessiveness.</li>
                        <li>Engage in invigorating activities such as brisk walking, hiking, or cardio workouts.</li>
                        <li>Use herbs and spices with stimulating properties like ginger, black pepper, and cinnamon.</li>
                        <li>Keep environments well-ventilated and bright to counteract Kapha's tendency toward stagnation and dullness.</li>
                        <li>Practice regular detoxification to prevent accumulation of toxins and excess mucus.</li>
                        <li>Cultivate mental agility through learning, creativity, and problem-solving activities.</li>
                        </ul>
                        </div>
                    </div>
                }
                {dosha === "Pitta" &&
                    <div className='container dosha-card'>
                        <img src={pitta} width={275} className="dosha-logo" alt='dosha-logo' />
                        <div className='dcardinner'>
                        <p><h2>Your Dosha is Pitta: </h2>The Pitta dosha oversees digestion and metabolic processes, breaking down food and converting nutrients into energy. It governs hormone and enzyme production, regulating body temperature for maintaining homeostasis.</p>
                        <h2>Points to Follow: </h2>
                        <ul>
                            <li>Follow a balanced diet with emphasis on cooling, sweet, and bitter foods.</li>
                            <li>Stay hydrated with room temperature or cool water.</li>
                            <li>Maintain a regular daily routine with sufficient rest and relaxation.</li>
                            <li>Avoid overexertion and stressful situations.</li>
                            <li>Engage in cooling activities like swimming and walking in nature.</li>
                            <li>Cultivate emotional balance and avoid anger-provoking situations.</li>
                            <li>Incorporate gentle exercise like yoga.</li>
                            <li>Use herbs and spices with cooling properties like coriander and mint.</li>
                            <li>Protect yourself from excessive sun exposure.</li>
                            <li>Consider periodic detoxification practices to balance pitta dosha.</li>
                        </ul>
                        </div>                     
                    </div>
                }
                {dosha === "Vata" &&
                    <div className='container dosha-card'>
                        <img src={vata} width={275} className="dosha-logo" alt='dosha-logo' />
                        <div className='dcardinner'>
                        <p><h2>Your Dosha is Vata: </h2>The Kapha dosha directs bodily structure and lubrication, influencing bone, muscle, and tissue strength, skin hydration, and joint lubrication.  In Ayurveda, Kapha is recognized as pivotal in fortifying the body's innate defense mechanisms against illnesses and maintaining well-being.</p>
                        <h2>Points to Follow: </h2>
                        <ul>
                            <li>Prioritize warm, nourishing, and grounding foods to pacify Vata's tendency towards dryness and instability.</li>
                            <li>Establish a consistent daily routine to provide stability and structure.</li>
                            <li>Stay warm and protected from cold, windy weather to prevent Vata imbalances.</li>
                            <li>Practice grounding and calming activities like yoga, meditation, and deep breathing exercises.</li>
                            <li>Ensure regular meals and avoid skipping meals to maintain stable energy levels.</li>
                            <li>Keep environments cozy, warm, and clutter-free to create a sense of security and stability.</li>
                            <li>Use warming spices and herbs like ginger, cinnamon, and turmeric to aid digestion and promote balance.</li>
                            <li>Incorporate self-massage with warm oils, especially on joints and skin, to soothe Vata's tendency towards dryness.</li>
                            <li>Limit exposure to excessive stimulation, including loud noises, bright lights, and intense activities, to avoid overstimulating Vata's sensitive nervous system.</li>
                            <li>Embrace quiet reflection and introspection to cultivate inner peace and stability amidst life's change</li>
                        </ul>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default UserDosha
