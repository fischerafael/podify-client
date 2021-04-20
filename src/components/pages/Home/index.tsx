import NavBar from '../../common/NavBar'
import Player from '../../common/Player'
import { FlexContainer, GridContainer } from '../../design-system/containers'

const HomePage = () => {
    return (
        <>
            <GridContainer
                as="main"
                style={{
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    minHeight: '100vh'
                }}
            >
                <FlexContainer
                    as="section"
                    style={{
                        justifyContent: 'flex-start'
                    }}
                >
                    <NavBar />
                </FlexContainer>
                <Player />
            </GridContainer>
        </>
    )
}

export default HomePage
