import { useContext, useEffect, useState } from 'react';
import { Navbar } from '../Navbar/Navbar';
import open from '../../assets/icons/open.svg';
import close from '../../assets/icons/close.svg';
import './Menu.scss';
import { ThemeContext } from '../Context/ThemeContext';

export function Menu() {
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);
  const { theme } = useContext(ThemeContext);

  function handleClickToggleNavbar() {
    setIsOpenNavbar(!isOpenNavbar);
    console.log('click');
    document.body.style.overflow = isOpenNavbar ? 'auto' : 'hidden';

    const burgerIcon = document.querySelector('.menu__icon');
    burgerIcon?.classList.toggle('_active');

    const navbarBody = document.querySelector('.navbar');
    navbarBody?.classList.toggle('_active');
  }

  useEffect(() => {
    const handleClickCloseNavbar = (event: MouseEvent | React.MouseEvent) => {
      if (!(event.target as HTMLElement).closest('.menu__icon')) {
        setIsOpenNavbar(false);
        document.body.style.overflow = !isOpenNavbar ? 'auto' : 'hidden';
        const burgerIcon = document.querySelector('.menu__icon');
        burgerIcon?.classList.remove('_active');
      }
    };

    document.addEventListener('click', handleClickCloseNavbar);
    return () => document.removeEventListener('click', handleClickCloseNavbar);
  }, []); // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <div className="menu">
      <div className="menu__icon" onClick={handleClickToggleNavbar}>
        {isOpenNavbar ? <img src={close} alt="close" /> : <img src={open} alt="close" />}
      </div>
      {isOpenNavbar && (
        <div className={theme ? 'menu__navbar navbar dark-theme' : 'menu__navbar navbar light-theme'}>
          <Navbar />
        </div>
      )}
    </div>
  );
}
