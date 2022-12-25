import Card from 'react-bootstrap/Card';

export default function PageHeader(props) {
    
    return (
        //<p>PageHeader</p>
        <>
        <Card className = "bg-light">
      <Card.Body>
        {props.text}
      </Card.Body>
    </Card>
        <br />
        </>
    )
  }