import { Button, Drawer } from 'antd';
import React, {useEffect, useState} from 'react';
import './FixedMenu.css';
import DesktopLogo from '../Assets/LogoChurch.png';
import MobileLogo from '../Assets/LogoChurchLong.png';
import {Link, useLocation} from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import {MenuOutlined} from '@ant-design/icons';

const FixedMenu = () => {

  const isMobile = useMediaQuery({ maxWidth: 767 });
  // const [menuKey, setMenuKey] = useState('main');
  const [drawerVisible, setDrawerVisible] = useState(false);
  let location = useLocation();

  useEffect(() => {
    // setMenuKey(location.pathname);
  }, [location])

  const onOpen = () => {
    setDrawerVisible(true);
  }

  const onClose = () => {
    setDrawerVisible(false);
  }

  const handleClick = (e) => {
   // setMenuKey(e.key);
   if (isMobile) {
    setDrawerVisible(false);
   }
  }

  const itemList = [
    {
      title: 'Ogłoszenia',
      key: '/ogloszenia'
    },
    {
      title: 'Intencje',
      key: '/intencje'
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
      {isMobile ? 
        <Link className='pic-link' to='/'><img src={MobileLogo} alt='logo' className='logo'/></Link>
        :
        <Link className='pic-link' to='/'><img src={DesktopLogo} alt='logo' className='logo'/></Link>
      }
      <div className='fixed-menu'>
        {isMobile ? 
          <div className='menu-list'>
            <MenuOutlined onClick={onOpen} />
            <Drawer
              title="Menu"
              placement='right'
              onClose={onClose}
              visible={drawerVisible}
            >
              {itemList.map((item) => <Link to={item.key}><Button type="primary" id={item.key} onClick={handleClick}>{item.title}</Button></Link>)}
            </Drawer>
          </div>
          :
          <div className='menu-list'>
            {itemList.map((item) => <Link to={item.key}><Button type="primary" id={item.key} onClick={handleClick}>{item.title}</Button></Link>)}
          </div>
        }

      </div>
    </React.Fragment>
  )
}

export default FixedMenu;