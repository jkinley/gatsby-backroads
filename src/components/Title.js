import React from 'react'
import styled from 'styled-components'

const Title = ({title,subtitle,className}) => {
    return (
        <div className={className}>
            <h2>
                <span className="title">{title}</span>
                <span className="subtitle">{subtitle}</span>
            </h2>
        </div>
    )
}

export default styled(Title)`
    text-transform: uppercase;
    font-size: 2rem;
    margin-bottom: 2rem;
    h2 {
        text-align: center;
        letter-spacing: 2px;
        color: var(--primaryColor);
    }
    .title {
        color: var(--mainBlack);
    }
    span {
        display: block;
    }

    @media(min-width: 576px) {
        span {
            display: inline-block;
            margin: 0 0.5rem;
        }
    }
`
