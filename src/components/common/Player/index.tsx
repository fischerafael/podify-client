import { FlexContainer } from '../../design-system/containers'
import { CustomText } from '../../design-system/display'
import PlayerBody from './PlayerBody'
import PlayerFooter from './PlayerFooter'
import PlayerHeader from './PlayerHeader'

const Player = () => {
    return (
        <FlexContainer
            as="section"
            style={{
                background: '#333',
                minHeight: '100vh',
                flexDirection: 'column',
                justifyContent: 'flex-start'
            }}
        >
            <PlayerHeader />
            <PlayerBody />
            <PlayerFooter />
        </FlexContainer>
    )
}

export default Player
