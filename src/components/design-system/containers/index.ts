import styled from 'styled-components'

export const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1rem;

    @media (max-width: 800px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`
