import { useParams } from "react-router-dom";

function Contact() {

  const { id, name } = useParams()
  console.log(useParams())
  return (
    <>
      <h1>
        { id }
      </h1>
      <h6>
        {name}
      </h6>
    </>

  );
}

export default Contact;