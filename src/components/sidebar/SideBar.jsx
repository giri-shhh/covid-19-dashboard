import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SideBar.module.css';
import AppLogo from './app-logo/AppLogo';
import Tab from './Tab/Tab';
import { RiDashboardFill, RiNewspaperFill } from 'react-icons/ri';
import { FaHandPaper } from 'react-icons/fa';
import { IoMdAnalytics } from 'react-icons/io';
import { MdCall, MdErrorOutline } from 'react-icons/md';
import { BiDonateHeart } from 'react-icons/bi';
import { AiFillSetting } from 'react-icons/ai';

const tabs = [
  {
    name: 'Dashboard',
    iconPrimary: <RiDashboardFill fill='rgb(251,151,161)' />,
    iconSecondary: <RiDashboardFill fill='rgb(162,163,183)' />,
  },
  {
    name: 'Analysis',
    iconPrimary: <IoMdAnalytics fill='rgb(251,151,161)' />,
    iconSecondary: <IoMdAnalytics fill='rgb(162,163,183)' />,
  },
  {
    name: 'News',
    iconPrimary: <RiNewspaperFill fill='rgb(251,151,161)' />,
    iconSecondary: <RiNewspaperFill fill='rgb(162,163,183)' />,
  },
  {
    name: 'Donate',
    iconPrimary: <BiDonateHeart fill='rgb(251,151,161)' />,
    iconSecondary: <BiDonateHeart fill='rgb(162,163,183)' />,
  },
  {
    name: "Do & Don't'",
    iconPrimary: <FaHandPaper fill='rgb(251,151,161)' />,
    iconSecondary: <FaHandPaper fill='rgb(162,163,183)' />,
  },
  {
    name: 'Helpline',
    iconPrimary: <MdCall fill='rgb(251,151,161)' />,
    iconSecondary: <MdCall fill='rgb(162,163,183)' />,
  },
  {
    name: 'About',
    iconPrimary: <MdErrorOutline fill='rgb(251,151,161)' />,
    iconSecondary: <MdErrorOutline fill='rgb(162,163,183)' />,
  },
  {
    name: 'Settings',
    iconPrimary: <AiFillSetting fill='rgb(251,151,161)' />,
    iconSecondary: <AiFillSetting fill='rgb(162,163,183)' />,
  },
];

function SideBar(props) {
  const [selectedTab, setselectedTab] = useState(0);

  return (
    <div className={styles.container}>
      <AppLogo />
      <div className={styles.tabsContainer}>
        {tabs.map((tab, index) => {
          return (
            <Tab
              selectedTab={index === selectedTab}
              icon={index === selectedTab ? tab.iconPrimary : tab.iconSecondary}
              tab={tab.name}
            />
          );
        })}
      </div>
    </div>
  );
}

SideBar.propTypes = {};

export default SideBar;
