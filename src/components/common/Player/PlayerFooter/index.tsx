import { FlexContainer } from '../../../design-system/containers'
import Buttons from './Buttons'

import ProgressBar from './Progress'

const PlayerFooter = () => {
    return (
        <FlexContainer
            as="footer"
            style={{
                width: '100%',
                height: '30vh',
                padding: '2rem',
                flexDirection: 'column',
                gap: '1rem',
                justifyContent: 'flex-end'
            }}
        >
            <ProgressBar />
            <Buttons />
        </FlexContainer>
    )
}

export default PlayerFooter
