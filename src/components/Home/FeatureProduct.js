import Product from "../Product";
import { useProductContext } from "../../context/product_contex.js";
import { Skeleton, Container } from "./styles.js";

const CardLoader = () => {
  return(
    <div className="grid grid-three-column">
      {[...Array(3).keys()].map((loader) => {
      return(
      <div key={loader} style={{ width: 'fit-content', background:'#fff', height:'fit-content', padding:'8px', margin: '4px', borderRadius:'8px' }}>
        <Skeleton width={320} height={160} />
        <div style={{ display :'flex', justifyContent:'space-between', marginTop:'8px'}}>
          <Skeleton width={100} height={20} />
          <Skeleton width={100} height={20} />
        </div>
      </div>
      );
    })}
    </div>
  )
};

const FeatureProduct = () => {
  const { isLoading = false, featureProducts = [] } = useProductContext();

  return (
    <Container className="section">
      <div className="container">
        <div className="intro-data">Check Now!</div>
        <div className="common-heading">Our Feature Services</div>
        {isLoading ? <CardLoader /> :
        <div className="grid grid-three-column">
          {(featureProducts || []).map((curElem) => {
            return <Product key={curElem.id} {...curElem} />;
          })}
        </div>}
      </div>
    </Container>
  );
};

export default FeatureProduct;
