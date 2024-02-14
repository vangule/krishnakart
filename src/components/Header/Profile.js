import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Profile = () => {
    const { user, isAuthenticated, loginWithRedirect,  isLoading, logout } = useAuth0();

    const { nickname = '', email = '' } = user || {};

    const firstLetter = nickname.slice(0, 1);

    const handleAuth = () => {
        if(isLoading){
            return;
        }

        if(isAuthenticated) {
            logout({ logoutParams: { returnTo: window.location.origin } })
        } else {
            loginWithRedirect()
        }
    }

  return (
    <ProfileContainer>
        {isAuthenticated && <TopSection>
            {nickname && <Avtar>{firstLetter}</Avtar>}
            <div style={{ marginLeft: '10px' }}>
                <Name>{nickname}</Name>
                <Email>{email}</Email>
            </div>
        </TopSection>}
        <LinkWrapper to="/cart">
            <Order>
                <img src="./images/shopping-bag.png" alt='order' width={20} height={20} style={{ marginRight : '28px'}} />
                My Orders
            </Order>
        </LinkWrapper>
        <Logout role='presentation' onClick={handleAuth}>
                <img src={`./images/${isAuthenticated ? 'logout.png' : 'log-in.png'}`} alt='order' width={18} height={18} style={{ marginRight : '28px'}} />
                {isAuthenticated ? 'Logout' : 'Log In'}
        </Logout>
    </ProfileContainer>
  )
}

export default Profile;

const ProfileContainer = styled.div`
    width: 200px;
    font-size: 18px;
    color: gray;
`;

const Avtar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: orange;
    text-align: center;
    color: #fff;
    border-radius: 50%;
    padding: 4px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 22px;
`;

const TopSection = styled.div`
    display: flex;
    padding: 8px 2px;
    border-bottom: 1px solid rgb(53, 53, 67);
`;

const Name = styled.div`
    text-transform: capitalize;
`;

const Email = styled.div`
    font-size: 16px;
    padding-top: 4px;
    width: 140px; 
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Order = styled.div`
    border-bottom: 1px solid rgb(53, 53, 67);
    padding: 8px 2px;
`;

const Logout = styled.div`
    padding: 8px 2px;
    cursor: pointer;

    :hover {
        color: #6254F3;
    }
`;

const LinkWrapper = styled(Link)`
    color: gray;

    :hover {
        color: #6254F3;
    }
`;