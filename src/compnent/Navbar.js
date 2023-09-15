import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  /* 네비게이션 메뉴바 영역을 배열로 처리-> 메뉴의 확장성 */
  const menuList = [
    "전체",
    "아우터",
    "드레스",
    "상의",
    "하의",
    "악세사리",
    "특가세일"
  ]
  return (
    <>
      <div className='login-button'>
        <FontAwesomeIcon icon={faUser} />
        <span className='login-text'>로그인</span>
      </div>
      <div className='logo'>
        <img src={require('../img/logo.jpg')} alt='로고'></img>
      </div>
      <div className='menu-area'>
        <ul className='menu-list'>
          {
            menuList.map(
              (menu, idx) => <li key={idx}>{menu}</li>

            )
          }
        </ul>
        <div className='search-area'>
        <FontAwesomeIcon icon={faSearch} />
        <input type='text'></input>
        </div>
      </div>

    </>
  )
}

export default Navbar
