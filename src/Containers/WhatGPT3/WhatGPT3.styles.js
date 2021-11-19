import styled from 'styled-components';

import {Feature1,FeatureText} from '../../Components/Feature/Feature.styles';

export const Whatgpt3=styled.div`
    display: flex;
    flex-direction: column;

    padding: 2rem;
    background: var(--color-footer);

    /* ff 3.6+ */
    background:-moz-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);

    /* safari 5.1+,chrome 10+ */
    background:-webkit-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);

    /* opera 11.10+ */
    background:-o-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);

    /* ie 10+ */
    background:-ms-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);

    /* global 92%+ browsers support */
    background:radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));


`

export const GptFeature=styled.div`
     display: flex;
     ${Feature1}{
        margin: 0;
        @media screen and (max-width: 650px){
            flex-direction: column;
        }
     }
     ${FeatureText}{
        max-width: 700px;
        @media screen and (max-width: 650px){
            margin-top: 0.5rem;
        }
     }
`;

export const GptHeading=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    margin: 4rem 0 2rem;
    @media screen and (max-width: 850px) {
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 0rem;
    }
    h1 {
    font-size: 34px;
    line-height: 45px;
    font-weight: 800;
    font-family: var(--font-family);
    max-width: 510px;
    @media screen and (max-width: 650px){
        font-size: 28px;
        line-height: 40px;
        }
    }
    p {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    color: var(--color-subtext);
    cursor: pointer;
    @media screen and (max-width: 850px){
        margin-top:1rem;
    }
    }

`;

export const GptContainer=styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    margin-top: 2rem;
    ${Feature1}{
        flex: 1;
        margin: 1rem;
        min-width: 210px;
        display: unset;
        flex-direction: column;
        @media screen and (max-width: 350px) {
    /* Customizing feature component as per needs */
    
        margin: 1rem 0;
        min-width: 100%;
    }
    }
    ${FeatureText}{
        margin-top: 0.5rem;
    }

`;
