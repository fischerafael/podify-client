import { FlexContainer } from '../../../../design-system/containers'
import IconButton from './Icon'

const Buttons = () => {
    return (
        <FlexContainer as="nav" style={{ gap: '1rem' }}>
            <IconButton src="/buttons/random.svg" />
            <IconButton src="/buttons/back.svg" />
            <FlexContainer
                as="button"
                style={{ height: '3rem', width: '3rem' }}
            >
                <FlexContainer as="img" src="/buttons/play.svg" />
            </FlexContainer>
            <IconButton src="/buttons/next.svg" />
            <IconButton src="/buttons/repeat.svg" />
        </FlexContainer>
    )
}

export default Buttons
