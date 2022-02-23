import React from 'react';
import MenuItem from './MenuItem';
import { useNavigate } from 'react-router-dom';

import { IoBookmarkOutline } from 'react-icons/io5';
import { IoNotificationsOutline } from 'react-icons/io5';
import { IoHomeOutline } from 'react-icons/io5';

const MenuItems = function (props) {
  const navigate = useNavigate();

  const handleHomeClick = function () {
    navigate('/home/tweets');
  };

  return (
    <React.Fragment>
      <MenuItem icon={IoHomeOutline} label="Home" onClick={handleHomeClick} />
      <MenuItem icon={IoBookmarkOutline} label="Bookmarked" />
      <MenuItem icon={IoNotificationsOutline} label="Notifications" />
    </React.Fragment>
  );
};

export default MenuItems;
