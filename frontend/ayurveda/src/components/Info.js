import React from 'react'
import kapha from '../assests/kapha.png'
import pitta from '../assests/pitta.png'
import vata from '../assests/vata.png'

function Info() {
  return (
    <div className='info container flexUtil'>
        <div className='infoInner'>
            <h1>The Doshas</h1>
            <hr/>
            <p>Ayurvedic doshas, comprising Vata, Pitta, and Kapha, are elemental energies governing physiological and psychological functions in Ayurveda. Vata governs movement and communication, Pitta regulates metabolism and digestion, while Kapha governs structure and stability. Balancing these doshas is central to Ayurvedic health and wellness practices.</p>
        </div>
        <div className='container info-card-con'>
            <div className='container flexUtil info-card'>
                <img src={kapha} width={275} className="dosha-logo" alt='dosha-logo'/>
                <h2>Kapha</h2>
                <p>The Vata dosha regulates bodily movement, including muscles, tissues, and cell mobility, along with blood and lymphatic fluid circulation. It also manages the nervous system, facilitating brain-body communication pathways. Vata serves as the vital force mediating information flow between the brain and body parts.</p>
            </div>

            <div className='container flexUtil info-card'>
                <img src={pitta} width={275} className="dosha-logo" alt='dosha-logo'/>
                <h2>Pitta</h2>
                <p>The Pitta dosha oversees digestion and metabolic processes, breaking down food and converting nutrients into energy. It governs hormone and enzyme production, regulating body temperature for maintaining homeostasis.</p>
            </div>
            <div className='container flexUtil info-card'>
                <img src={vata} width={275} className="dosha-logo" alt='dosha-logo'/>
                <h2>Vata</h2>
                <p>The Kapha dosha directs bodily structure and lubrication, influencing bone, muscle, and tissue strength, skin hydration, and joint lubrication.  In Ayurveda, Kapha is recognized as pivotal in fortifying the body's innate defense mechanisms against illnesses and maintaining well-being.</p>
            </div>
        </div>
    </div>
  )
}

export default Info