import React, { useState } from "react";
import { Container } from './styles';

const ProductImg = ({ imgs = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(imgs[0]);

  return (
    <Container>
      <div className="grid grid-four-column">
        {(imgs || []).map((curElm, index) => {
          return (
            <figure id={curElm?.url} key={curElm?.url}>
              <img
                src={curElm.url}
                alt={curElm.filename}
                className="box-image--style"
                key={index}
                onClick={() => setMainImage(curElm)}
              />
            </figure>
          );
        })}
      </div>

      <div className="main-screen">
        <img src={mainImage.url} alt={mainImage.filename} />
      </div>
    </Container>
  );
};

export default ProductImg;
