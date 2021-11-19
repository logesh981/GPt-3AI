import React from 'react';

import { Whatgpt3,GptFeature,GptHeading,GptContainer} from './WhatGPT3.styles';

import Feature from '../../Components/Feature/Feature';

const WhatGPT3 = () => {
    return (
        <Whatgpt3 className="section__margin" id="wgpt3">
            <GptFeature>
                <Feature title="What is GPT-3"
                text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by"/>
            </GptFeature>
            <GptHeading>
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p>Explore the library</p>
            </GptHeading>
            <GptContainer>
                <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
                <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
                <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
            </GptContainer>
        </Whatgpt3>
    )
}

export default WhatGPT3;
