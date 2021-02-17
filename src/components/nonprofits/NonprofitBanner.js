import React from 'react'
import {Jumbotron, Container} from 'react-bootstrap'

const NonprofitBanner = (props) => {
    console.log(props)
    return(
        <Jumbotron fluid>
            <Container>
                <h1>{props.nonprofit.name}</h1>
                <p>
                Contact info: {props.nonprofit.contact_info}
                </p>
            </Container>
        </Jumbotron>
    )
}

export default NonprofitBanner