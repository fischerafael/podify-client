import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { FlexContainer } from '../../design-system/containers'
import { CustomText } from '../../design-system/display'

const NavBar = () => {
    const currentData = format(new Date(), 'EEEEEE, d MMMM', { locale: ptBR })

    return (
        <FlexContainer
            as="header"
            style={{ width: '100%', padding: '2rem 1rem' }}
        >
            <FlexContainer as="img" src="/logo-navbar.svg" alt="Podify-Logo" />
            <FlexContainer
                as="nav"
                style={{ width: '100%', justifyContent: 'space-between' }}
            >
                <CustomText as="p" style={{ paddingLeft: '2rem' }}>
                    O melhor para você ouvir, sempre
                </CustomText>
                <CustomText as="p">{currentData}</CustomText>
            </FlexContainer>
        </FlexContainer>
    )
}

export default NavBar
