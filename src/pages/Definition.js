import { useEffect, useState } from "react";
import {v4 as uuidv4} from "uuid"
import { Link, useNavigate, useParams } from "react-router-dom";
import NotFound from "../components/NotFound";
import DefinitionSearch from "../components/DefinitionSearch";

export default function Definition() {
  const [word, setWord] = useState();
  const [notFound, setNotFound] = useState()
  let {search} = useParams();
  const [error, setError] = useState()
  const navigate = useNavigate();

  useEffect(() => {
    //const url = 'https://httpstat.us/500'
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + search;
    fetch(url)
      .then((Response) => {
        console.log(Response.status)
        if (Response.status === 404) {
          setNotFound(true);
        } else if (Response.status === 401) {
          navigate("/login");
        } else if (Response.status === 500) {
          //setServerErrors(true);
        }
        if(!Response.ok) {
            setError(true);
            throw new error ('something went wrong')
        }
        return Response.json();
    })
      .then((data) => {
        setWord(data[0].meanings);
      });
  }, []);

  if (notFound === true) {
    return (
    <>
    <NotFound />
    <Link to="/dictionary">Search Another</Link>
    </>
)
  }

  return (
    <>
      {word ? (
        <>
          <h1>Here is a Definition:</h1>
          {word.map((meaning) => {
            return (
              <p key={uuidv4()}>
                {meaning.partOfSpeech + ": "}
                {meaning.definitions[0].definition}
              </p>
            );
          })}
          <p> Search Again : </p>
          <DefinitionSearch />
        </>
      ) : (
        <p>Loading.....</p>
      )}
    </>
  );
}
