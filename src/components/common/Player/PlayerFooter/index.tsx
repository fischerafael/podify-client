import { FlexContainer } from '../../../design-system/containers'
import Buttons from './Buttons'

import ProgressBar from './Progress'

const PlayerFooter = () => {
    return (
        <FlexContainer
            as="footer"
            style={{
                width: '100%',
                height: '40vh',
                padding: '3rem',
                flexDirection: 'column',
                gap: '1rem'
            }}
        >
            <ProgressBar />
            <Buttons />
        </FlexContainer>
    )
}

export default PlayerFooter
