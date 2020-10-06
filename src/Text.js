import React from 'react';

function Text(props) {
    if(props.isAbout.toLowerCase() === 'premest') {
        return (
            <p className="long-text"> 
                Pre-MEST, an early-stage training program by MEST in partnership with Mastercard Foundation, targets young entrepreneurs and intrapreneurs with the desire to build their technology and business acumen. By learning the new technical skills needed to start a successful company or add value to existing employers, Pre-MEST works to further improve the participants’ employability and add value to growing demand and interest in software entrepreneurship across Ghana.<br/><br/>
                MEST is an Africa-wide technology entrepreneur training program, internal seed fund, and network of hubs offering incubation for technology startups in Africa. Founded in Ghana in 2008, MEST provides critical skills training, funding, and support in software development, business, and communications to Africa’s tech entrepreneurs. Hubs are located in Accra, Lagos, Cape Town, and Nairobi. Join us in providing opportunity to the next generation of world-class software entrepreneurs from Africa!"
            </p>
        );
    }
}

export default Text;