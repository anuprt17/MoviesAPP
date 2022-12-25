import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function MovieDetails(props) {
    return (
        <>
        <Container> 
            <Row>
                    {props.movie?.poster ?  <Col md><img src={props.movie?.poster} alt="poster" className="w-100" /><br /><br /></Col> : <em></em>}<br />
                    <Col md>
                    <strong>Directed By:</strong> {props.movie?.directors.join(', ')}<br/><br/>
                    <p>{props.movie?.fullplot}</p>
                    <strong>Cast:</strong> {props.movie?.cast ? props.movie?.cast.join(', ') : "N/A"}<br/><br/>
                    <strong>Awards:</strong> {props.movie?.awards.text}<br/>
                    <strong>IMDB Rating:</strong> {props.movie?.imdb.rating} ({props.movie?.imdb.votes} votes)
                    </Col>
            </Row>    
        </Container> 
        </>
    )
  }