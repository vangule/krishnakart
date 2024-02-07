import React from 'react'
import PageNavigation from '../PageNavigation';
import { Container, FitScreenImage, SmallImagePreview, Skeleton, SubContainer } from './styles';

const Loader = () => {
  return (
    <Container>
        <PageNavigation />
        <SubContainer>
            <div style={{ display:'flex', flex : 2 }}>
                <div style={{ display:'flex', flexDirection:'column', flex : 1}}>
                {[...Array(3).keys()].map((item) => {
                    return(<SmallImagePreview key={item} />)
                })}
                </div>
                <FitScreenImage />
            </div>
            <div style={{ display:'flex', flexDirection:'column', flex : 2 }}>
                <Skeleton width={300} height={30} />
                <Skeleton width={400} height={30} />
                <Skeleton width={220} height={30} />
                <Skeleton width={290} height={30} />
                <Skeleton height={200} />
            </div>
        </SubContainer>
    </Container>
  )
}

export default Loader;