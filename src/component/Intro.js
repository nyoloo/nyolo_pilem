import { Button, Col, Container, Row } from 'react-bootstrap';
const Intro = () =>{
    return(
        <div className='myB'>
        <Container className='text-center d-flex justify-content-center
        align-item-center '>
          <Row>
            <Col>
            <h1 className='title'>Selamat Datang</h1>
            <h1 className='title'> ga pake arcis</h1>
            <h1 className='introButtom mt-3 text-center' >
            <Button variant='dark'>Lihat Semua List</Button>
            </h1>
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default Intro