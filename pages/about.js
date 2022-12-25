import Link  from 'next/link'
import MovieDetails from "../components/MovieDetails";
import PageHeader from "../components/PageHeader";
import Card from 'react-bootstrap/Card';

  export function getStaticProps() {
    return new Promise((resolve,reject)=>{
      fetch('https://cyan-repulsive-elk.cyclic.app/api/movies/573a1391f29313caabcd956e').then(res=>res.json()).then(data=>{
        resolve({props: {movie: data}})
      })
    })
  }

export default function About(props) {
    return (
        <>
        <PageHeader  text ="About the Developer: Anupreet Kaur" />
        <Card>
      <Card.Body>Hello developers!!!!! My name is Anupreet Kaur.
         I am currently enrolled in diploma in Computer Pragramming at Seneca College. I graduated from high school in 2020. 
         I had Mathematics, Chemistry and Physics as my core subjects in high school. I was always curious about how this tech world works. 
         Thereby, I stepped into this field to learn about different programming languages and concepts.
         <br/><br/>
         <p>Link to the movie <Link href="/movies/Dark City"><a>Dark City</a></Link></p>
      </Card.Body>
      <MovieDetails movie={props.movie}/>
    </Card>
        </>
    )
  }