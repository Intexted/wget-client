import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navdata = () => {
  const history = useNavigate();
  //state data

  const [isApps, setIsApps] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [iscurrentState, setIscurrentState] = useState('Dashboard');

  function updateIconSidebar(e) {
    if (e && e.target && e.target.getAttribute('subitems')) {
      const ul = document.getElementById('two-column-menu');
      const iconItems = ul.querySelectorAll('.nav-icon.active');
      let activeIconItems = [...iconItems];
      activeIconItems.forEach((item) => {
        item.classList.remove('active');
        var id = item.getAttribute('subitems');
        if (document.getElementById(id))
          document.getElementById(id).classList.remove('show');
      });
    }
  }

  useEffect(() => {
    document.body.classList.remove('twocolumn-panel');

    if (iscurrentState !== 'Apps') {
      setIsApps(false);
    }
    if (iscurrentState !== 'Auth') {
      setIsAuth(false);
    }
  }, [history, iscurrentState, isApps, isAuth]);

  const menuItems = [
    {
      label: 'Menu',
      isHeader: true,
    },

    {
      id: 'Dashboard',
      label: 'Dashboard',
      icon: ' bx bxs-dashboard',
      link: '/dashboard',
      click: function (e) {
        e.preventDefault();
        updateIconSidebar(e);
      },
    },
    {
      id: 'Services',
      label: 'Services',
      icon: 'bx bx-dialpad-alt',
      link: '/services',
      click: function (e) {
        e.preventDefault();
        updateIconSidebar(e);
      },
    },
    {
      id: 'Domains',
      label: 'Domains',
      icon: 'bx bx-spreadsheet',
      link: '/domains',
      click: function (e) {
        e.preventDefault();
        updateIconSidebar(e);
      },
    },
    {
      id: 'Factures',
      label: 'Factures',
      icon: 'bx bxs-wallet',
      link: '/factures',
      click: function (e) {
        e.preventDefault();
        updateIconSidebar(e);
      },
    },
    {
      id: 'profile',
      label: 'Mon profile',
      icon: 'bx bx-user',
      link: '/profile',
      click: function (e) {
        e.preventDefault();
        updateIconSidebar(e);
      },
    },
    {
      id: 'Help',
      label: 'Help',
      icon: ' bx bx-question-mark',
      link: '/faqs',
      click: function (e) {
        e.preventDefault();
        updateIconSidebar(e);
      },
    },
  ];
  return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;
