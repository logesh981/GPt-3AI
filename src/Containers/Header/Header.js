import React from 'react'
//images
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

import {Header1,
HeaderContent,
HeaderContentInput,
HeaderContentPeople,
HeaderImage
} from './Header.styles';

const Header = () => {
    return (
        <Header1 className="section-padding" id="home">
            <HeaderContent>
                <h1 className="gradient__text">
                Let&apos;s Build Something amazing with GPT-3 OpenAI  
                </h1>
                <p>
                Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of
                </p>
                <HeaderContentInput>
                    <input type="email" placeholder="your email address"/>
                    <button type="button">Get started</button>
                </HeaderContentInput>
                <HeaderContentPeople>
                    <img src={people} alt="Images of people usingGPT3"/>
                    <p>1600 people requested visits in 24 hours</p>
                </HeaderContentPeople>
            </HeaderContent>
            <HeaderImage>
                <img src={ai} alt="AI bot"/>
            </HeaderImage>
        </Header1>
    )
};

export default Header;
