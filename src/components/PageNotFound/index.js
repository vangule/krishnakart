import { NavLink } from "react-router-dom";
import { Container, Button } from "./styles";
import { useEffect } from "react";

const PageNotFound = ({ pageNotFound = false, setPageNotFound = () => {} }) => {
  useEffect(() => {
      if(!pageNotFound){
        setPageNotFound(true)
      }
    }, [pageNotFound, setPageNotFound]);

  return (
    <Container>
      <div className="container">
        <div>
          <h2>404</h2>
          <h3>Page not found</h3>
          <p>
            You can click the button below to go back to the
            homepage.
          </p>

          <NavLink to="/">
            <Button onClick={() => setPageNotFound(false)}>Go Back to Home</Button>
          </NavLink>
        </div>
      </div>
    </Container>
  );
};

export default PageNotFound;
