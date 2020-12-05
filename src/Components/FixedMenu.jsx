import { Menu, Button } from 'antd';
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
        <img src={temporaryLogo} alt='logo' className='logo'/>
        </Menu.Item>
        <Menu.Item key='info'>
          <Button type="primary">Ogłoszenia</Button>
        </Menu.Item>
        <Menu.Item key='about'>
          <Button type="primary">O Parafii</Button>
        </Menu.Item>
        <Menu.Item key='patron'>
          <Button type="primary">Patron</Button>
        </Menu.Item>
        <Menu.Item key='priests'>
          <Button type="primary">Nasi księża</Button>
        </Menu.Item>
        <Menu.Item key='rosary'>
          <Button type="primary">Koło Żywego Różańca</Button>
        </Menu.Item>
        <Menu.Item key='links'>
          <Button type="primary">Przydatne linki</Button>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default FixedMenu;