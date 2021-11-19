import React from 'react'
import { Feature1,FeatureText,FeatureTitle } from './Feature.styles';


const Features = ({title,text}) => {
    return (
        <Feature1>
            <FeatureTitle>
                <div>
                    <h1>{title}</h1>
                </div>
            </FeatureTitle>
            <FeatureText>
                <p>
                    {text}
                </p>
            </FeatureText>
        </Feature1>
    )
}

export default Features;


