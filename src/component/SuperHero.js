import { Card, Container, Row, Col, Image } from "react-bootstrap"
import anmant from '../asset/images/superhero/antman.jpg'
import avenger from '../asset/images/superhero/avenger.jpg'
import robinhood from '../asset/images/superhero/robinhood.jpg'
import spiderman from '../asset/images/superhero/spiderman-cover.jpg'
import batman from '../asset/images/superhero/batman.jpg'
import superman from '../asset/images/superhero/superman.jpg'


const Superhero = () =>{

    const Title = {
        fontSize: '4rem',
        fontWeight: '800',
        lineHeight: '1',
        textShadow: '2px 2px black',
        color: "black",
      };


    return(
        <div>
            <Container>
            <br />
            <h1 className="text-center" style={Title}>superhero MOVIES</h1>
            <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="superhero">
                        <Card className="movieImages">
                            <Image src={anmant} alt="Dune Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">anmant</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in to additional
                                        content
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                         Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
            
                    <Col md={4} className="movieWrapper" >
                        <Card className="movieImages">
                            <Image src={avenger} alt="Dune Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">avenger</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in to additional
                                        content
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                         Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className="movieWrapper" >
                        <Card className="movieImages">
                            <Image src={robinhood} alt="Dune Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">robinhood</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in to additional
                                        content
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                         Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className="movieWrapper" >
                        <Card className="movieImages">
                            <Image src={spiderman} alt="Dune Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">spiderman</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in to additional
                                        content
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                         Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className="movieWrapper" >
                        <Card className="movieImages">
                            <Image src={superman} alt="Dune Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">superman</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in to additional
                                        content
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                         Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className="movieWrapper" >
                        <Card className="movieImages">
                            <Image src={batman} alt="Dune Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">batman</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in to additional
                                        content
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                         Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
          
        </div>
    )
}

export default Superhero 