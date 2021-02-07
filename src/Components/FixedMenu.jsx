import { Button } from 'antd';
import React, {useEffect, useState} from 'react';
import './FixedMenu.css';
import temporaryLogo from '../Assets/LogoChurch.png';
import {Link, useLocation} from 'react-router-dom';

const FixedMenu = () => {

  const [menuKey, setMenuKey] = useState('main');
  let location = useLocation();

  useEffect(() => {
    setMenuKey(location.pathname);
  }, [location])



  const handleClick = (e) => {
   setMenuKey(e.key);
   console.log('Menu', e, menuKey);
  }

  const itemList = [
    {
      title: 'Ogłoszenia',
      key: '/ogloszenia'
    },
    {
      title: 'O Parafii',
      key: '/o-parafii'
    },
    {
      title: 'Nasi księża',
      key: '/ksieza'
    },
    {
      title: 'Galeria',
      key: '/galeria'
    },
    {
      title: 'Przydatne linki',
      key: '/linki'
    }
  ]

  return(
    <React.Fragment>
      <Link className='pic-link' to='/'><img src={temporaryLogo} alt='logo' className='logo'/></Link>
      <div className='fixed-menu'>
        <div className='menu-list'>
          {itemList.map((item) => <Link to={item.key}><Button type="primary" id={item.key} onClick={handleClick}>{item.title}</Button></Link>)}
        </div>
      </div>
    </React.Fragment>
  )
}

export default FixedMenu;