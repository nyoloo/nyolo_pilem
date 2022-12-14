import { useEffect, useState } from "react"
import { Card, Container, Row, Col, Image } from "react-bootstrap"
import axios from "axios"
const Trending = () =>{
    const [movies,setMovies]= useState([])
    useEffect( ()=>{
        axios.get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
            params : {
                api_key:process.env.REACT_APP_TMDB_KEY
            }
        }).then((response)=>{
            setMovies(response.data.results)
        })
    },[])
    const myBG = {
        height:'auto' ,
        background: '#171717',
      };
    const Title = {
        fontSize: '4rem',
        fontWeight: '800',
        lineHeight: '1',
        textShadow: '2px 2px black',
        color: "white",
      };
    return(
        <div style={myBG}>
            <Container>
            <br />
            <h1 className=" text-center" id="trending" style={Title}>TRENDING MOVIES</h1>
            <br />
                <Row>
                    {movies.map((result, index)=>{
                        return(
                        <Col md={4} className="movieWrapper" >
                        <Card className="movieImages">
                            <Image src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path} `} alt="pe" className="images"  key={index}/>
                                <div className="bg-dark">
                                 <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">{result.tiltle}</Card.Title>
                                    <Card.Text className="text-left">
                                        {result.overview}
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                         {result.release_date}
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                        </Col>
                        )
                    })}
            
                </Row>
            </Container>
          
        </div>
    )
}

export default Trending 