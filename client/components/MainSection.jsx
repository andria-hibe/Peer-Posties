import React from 'react'
import { Image, Container } from 'react-bootstrap'
import HowItWorks from './HowItWorks'
import FormFields from './FormFields'
import MainFooter from "./MainFooter";
import Footer from './Footer'

class MainSection extends React.Component {
    state = {

    }

    render () {
      return (
        <>
          <Container fluid style={{ padding: 0, margin: 0, height: 100 }}>

            <Image src="map-dark.jpg" fluid style={{ width: '100%', height: '900%' }} />

            <Container style={{
              position: 'absolute',
              top: '20%',
              left: '20%'
            }}>
              <h1 style={{ color: 'white', fontSize: '5em' }}>Your local</h1>
              <h1 style={{ color: 'white', fontSize: '5em' }}>on-demand</h1>
              <h1 style={{ color: 'white', fontSize: '5em' }}>courier</h1>

              <h4 style={{ color: 'white' }}>Where we Operate:</h4>
              <h3 style={{ color: '#D9FF00', textDecoration: 'underline' }}>Auckland</h3>
              <h3 style={{ color: '#D9FF00', textDecoration: 'underline' }}>Wellington</h3>
              <h3 style={{ color: '#D9FF00', textDecoration: 'underline' }}>Christchurch</h3>
              <h3 style={{ color: '#D9FF00', textDecoration: 'underline' }}>Queenstown</h3>
            </Container>

            <Container style={{
              position: 'absolute',
              top: '15%',
              left: '60%',
              backgroundColor: 'white',
              width: 450
            }}>
              <FormFields />
            </Container>

            <Container fluid style={{ padding: 0, margin: 0, height: '100%', backgroundColor: '#00428F' }}>
            </Container>

            <HowItWorks/>

            <Footer />

            <MainFooter />

          </Container>
        </>
      )
    }
}

export default MainSection
