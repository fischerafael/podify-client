import { FlexContainer } from '../../../design-system/containers'
import { CustomText } from '../../../design-system/display'

const PlayerHeader = () => {
    return (
        <FlexContainer
            as="header"
            style={{
                width: '100%',
                height: '15vh',
                justifyContent: 'center',
                padding: '0 1rem',
                gap: '1rem'
            }}
        >
            <FlexContainer as="img" src="/playing-now.svg" alt="Playing-Now" />
            <CustomText as="p" style={{ fontWeight: 'bold' }}>
                Tocando agora
            </CustomText>
        </FlexContainer>
    )
}

export default PlayerHeader
