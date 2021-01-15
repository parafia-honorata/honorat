import { Button } from 'antd';
import React, {useState} from 'react';
import './FixedMenu.css';
import temporaryLogo from '../Assets/LogoChurch.png';
import {Link} from 'react-router-dom';

const FixedMenu = () => {

  const [menuKey, setMenuKey] = useState('main');

  const handleClick = (e) => {
   setMenuKey(e.key);
   console.log('Menu', menuKey);
  }

  const itemList = [
    {
      title: 'Ogłoszenia',
      key: 'ogloszenia'
    },
    {
      title: 'O Parafii',
      key: 'o-parafii'
    },
    {
      title: 'Patron',
      key: 'patron'
    },
    {
      title: 'Nasi księża',
      key: 'ksieza'
    },
    {
      title: 'Koło Żywego Różańca',
      key: 'kolo-zywego-rozanca'
    },
    {
      title: 'Galeria',
      key: 'galeria'
    },
    {
      title: 'Przydatne linki',
      key: 'linki'
    }
  ]

  return(
    <div className='fixed-menu'>
      <div className='menu-list'>
        <Link className='pic-link' to='/'><img src={temporaryLogo} alt='logo' className='logo'/></Link>
        {itemList.map((item) => <Link to={`/${item.key}`}><Button type="primary" key={item.key} onClick={handleClick}>{item.title}</Button></Link>)}
      </div>
    </div>
  )
}

export default FixedMenu;