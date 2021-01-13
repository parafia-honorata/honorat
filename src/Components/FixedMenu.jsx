import { Button } from 'antd';
import React, {useState} from 'react';
import './FixedMenu.css';
import temporaryLogo from '../Assets/temporaryLogo.png';

const FixedMenu = () => {

  const [menuKey, setMenuKey] = useState('main');

  const handleClick = (e) => {
   setMenuKey(e.key);
   console.log('Menu', menuKey);
  }

  return(
    <div className='fixed-menu'>
      <div className='menu-list'>
        <img src={temporaryLogo} alt='logo' className='logo'/>
        <Button type="primary" key={'main'} onClick={handleClick}>Strona główna</Button>
        <Button type="primary" key={'news'} onClick={handleClick}>Ogłoszenia</Button>
        <Button type="primary" key={'about'} onClick={handleClick}>O Parafii</Button>
        <Button type="primary" key={'patron'} onClick={handleClick}>Patron</Button>
        <Button type="primary" key={'our-priests'} onClick={handleClick}>Nasi księża</Button>
        <Button type="primary" key={'living-rosary'} onClick={handleClick}>Koło Żywego Różańca</Button>
        <Button type="primary" key={'gallery'} onClick={handleClick}>Galeria</Button>
        <Button type="primary" key={'useful-links'} onClick={handleClick}>Przydatne linki</Button>
      </div>
    </div>
  )
}

export default FixedMenu;