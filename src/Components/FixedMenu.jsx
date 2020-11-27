import { Menu } from 'antd';
import React, {useState} from 'react';
import './FixedMenu.css';
import temporaryLogo from '../Assets/temporaryLogo.png';

const FixedMenu = () => {

  const [menuKey, setMenuKey] = useState('main');

  const handleClick = (e) => {
   setMenuKey(e.key);
  }

  return(
    <div className='fixed-menu'>
      <Menu mode='horizontal' onClick={handleClick} selectedKeys={menuKey}>
        <Menu.Item key='main' disabled>
        <img src={temporaryLogo} alt='logo' className='standard-pic'/>
        </Menu.Item>
        <Menu.Item key='info'>
          Informacje
        </Menu.Item>
        <Menu.Item key='about'>
          O Parafii
        </Menu.Item>
        <Menu.Item key='patron'>
          Patron
        </Menu.Item>
        <Menu.Item key='priests'>
          Nasi księża
        </Menu.Item>
        <Menu.Item key='rosary'>
          Koło Żywego Różańca
        </Menu.Item>
        <Menu.Item key='links'>
          Przydatne linki
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default FixedMenu;