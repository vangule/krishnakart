import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import Button from '../common/Button';
import { Container } from "./styles";

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
            <Button text="go back to home" handleFun={() => setPageNotFound(false)} />
          </NavLink>
        </div>
      </div>
    </Container>
  );
};

export default PageNotFound;
