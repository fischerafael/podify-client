import React from 'react'
import { FlexContainer } from '../../../design-system/containers'
import { CustomText } from '../../../design-system/display'

const PlayerBody = () => {
    return (
        <FlexContainer
            as="section"
            style={{
                width: '100%',
                height: '45vh',
                padding: '2rem'
            }}
        >
            <FlexContainer
                as="article"
                style={{
                    maxWidth: '15rem',
                    maxHeight: '15rem',
                    height: '100%',
                    width: '100%',
                    border: '.1rem dashed #FFF',
                    borderRadius: '1rem'
                }}
            >
                <CustomText
                    as="p"
                    style={{
                        fontSize: '.75rem',
                        fontWeight: 'bold',
                        maxWidth: '7rem',
                        textAlign: 'center'
                    }}
                >
                    Selecione um podcast
                </CustomText>
            </FlexContainer>
        </FlexContainer>
    )
}

export default PlayerBody
