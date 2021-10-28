// default import
import React, { useState } from 'react';

// libraries
import {
  Apps,
  Menu,
  Mic,
  Notifications,
  Search,
  VideoCall,
  YouTube,
  WbSunny,
  Brightness3,
} from '@material-ui/icons';
import { Avatar, IconButton } from '@material-ui/core';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};

  & .link__container {
    display: flex;
    & > button {
      display: none;
    }
  }

  @media (max-width: 760px) {
    position: inherit;
    padding: 10px;
  }
`;

const HeaderLogo = styled.img`
  height: 25px;
  object-fit: contain;
  margin-left: 20px;

  @media (max-width: 760px) {
    display: none;
  }
`;

const HeaderLeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & .youtube__icon {
    display: none;
    @media (max-width: 760px) {
      display: block;
      font-size: 42px;
      color: red;
    }
  }

  & > .header__icon {
    padding: 8px;
    border-radius: 100%;
    cursor: pointer;

    @media (max-width: 760px) {
      display: none;
    }
  }
`;

const HeaderCenterContainer = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  @media (max-width: 760px) {
    width: 100%;
    margin-left: 10px;
    & > .mic__icon {
      display: none;
    }
  }
`;

const SearchContainer = styled.form`
  display: flex;
  align-items: center;
  border: 1px solid black;
  flex: 1;

  & > input {
    flex: 1;
    border: 1px transparent;
    padding: 10px;
  }

  & > input:focus {
    outline: none;
  }

  & .input_btn {
    width: 50px !important;
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: #fafafa;
    border-left: 1px solid lightgray;
    color: gray;
    cursor: pointer;
  }

  @media (max-width: 760px) {
    border-radius: 50px;
    margin-right: 17px;
    & > input {
      border-radius: 50px 0 0 50px;
    }
    & .input_btn {
      border-radius: 0 50px 50px 0;
      padding: 0;
    }
  }
`;

const HeaderIcons = styled.div`
  display: flex;
  align-items: center;

  & > .header_icon {
    padding: 8px;
    border-radius: 100%;
    cursor: pointer;

    @media (max-width: 760px) {
      display: none;
    }
  }

  & > .last_icon {
    margin-right: 8px;
  }
`;

function Header({ setDarkTheme, darkTheme }) {
  const [inputSearch, setInputSearch] = useState('');

  const themeSwitcherHandler = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <HeaderContainer>
      <HeaderLeftContainer>
        <Menu className='header__icon' />
        <Link className='link__container' to='/'>
          <YouTube className='youtube__icon' />
        </Link>
        <Link className='link__container' to='/'>
          <HeaderLogo
            src='https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg'
            alt=''
          />
        </Link>
      </HeaderLeftContainer>

      <HeaderCenterContainer>
        <SearchContainer onSubmit={`/search/${inputSearch}`}>
          <input
            placeholder='Search'
            type='text'
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
          />
          <Link className='link__container' to={`/search/${inputSearch}`}>
            <button type='submit'></button>
            <Search className='input_btn' />
          </Link>
        </SearchContainer>
        <IconButton className='mic__icon'>
          <Mic />
        </IconButton>
      </HeaderCenterContainer>
      <HeaderIcons>
        <span className='header_icon' onClick={themeSwitcherHandler}>{darkTheme ? <WbSunny /> : <Brightness3 />}</span>
        <VideoCall className='header_icon' />
        <Apps className='header_icon' />
        <Notifications className='header_icon last_icon' />
        <Avatar
          src='https://avatars.githubusercontent.com/u/80893583?v=4'
          alt='my profile'
          style={{ cursor: 'pointer' }}
        />
      </HeaderIcons>
    </HeaderContainer>
  );
}

export default Header;
