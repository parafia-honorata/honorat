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
      key: 'https://drive.google.com/drive/folders/1s6g6oZ2K5BW_3otAI-SUd1wNBGV6xYgc?usp=sharing',
      isExternal: true
    },
    {
      title: 'Przydatne linki',
      key: '/linki'
    }
  ]

  const renderLink = (link) => {
    if (link.isExternal) {
      return (
        <a href={link.key} target="_blank" rel="noreferrer"><Button type="primary" id={link.key} onClick={handleClick}>{link.title}</Button></a>
      )
    } else {
      return (
        <Link to={link.key}><Button type="primary" id={link.key} onClick={handleClick}>{link.title}</Button></Link>
      )
    }
  }

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
              {itemList.map((link) => renderLink(link))}
            </Drawer>
          </div>
          :
          <div className='menu-list'>
            {itemList.map((link) => renderLink(link))}
          </div>
        }

      </div>
    </React.Fragment>
  )
}

export default FixedMenu;