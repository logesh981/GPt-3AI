import React from 'react'
import { Wrapper,Brands } from './Brand.styles';

import {google,slack,atlassian,dropbox,shopify} from './imports';

function Brand() {
    return (
        <Wrapper>
            <Brands>
                <img src={google} alt="google icons"/>
            </Brands>
            <Brands>
                <img src={slack} alt="slack icons"/>
            </Brands>
            <Brands>
                <img src={atlassian} alt="atlassian icons"/>
            </Brands>
            <Brands>
                <img src={dropbox} alt="dropbox icon"/>
            </Brands>
            <Brands>
                <img src={shopify} alt="shopify icon" />
            </Brands>
        </Wrapper>
    )
}

export default Brand
