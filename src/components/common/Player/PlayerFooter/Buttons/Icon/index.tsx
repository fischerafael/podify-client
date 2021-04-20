import { FlexContainer } from '../../../../../design-system/containers'

const IconButton = ({ src }) => {
    return <FlexContainer as="img" src={src} style={{ cursor: 'pointer' }} />
}

export default IconButton
