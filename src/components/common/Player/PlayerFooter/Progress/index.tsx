import { FlexContainer } from '../../../../design-system/containers'
import { CustomText } from '../../../../design-system/display'

const ProgressBar = () => {
    return (
        <FlexContainer as="section" style={{ width: '100%', gap: '1rem' }}>
            <CustomText as="span" style={{ fontSize: '.75rem' }}>
                00:00
            </CustomText>
            <FlexContainer
                as="div"
                style={{
                    background: 'grey',
                    width: '100%',
                    height: '.2rem'
                }}
            />
            <CustomText as="span" style={{ fontSize: '.75rem' }}>
                00:00
            </CustomText>
        </FlexContainer>
    )
}

export default ProgressBar
