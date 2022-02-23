import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import MenuUserCard from './MenuUserCard';
import UserCardOptions from './UserCardOptions';
import UserContext from '../../store/user-context';

import classes from './MenuUser.module.css';
import MenuItems from './MenuItems';

const MenuUser = function () {
  const [openProfileOptions, setOpenProfileOptions] = useState(false);
  const userCtx = useContext(UserContext);
  const navigate = useNavigate();

  const nameToDisplay = `${userCtx.firstName} ${userCtx.lastName}`;

  const handleProfileOptionsClick = function () {
    setOpenProfileOptions(prev => !prev);
  };

  const handleViewProfile = function () {
    setOpenProfileOptions(false);
    navigate('/home/profile');
  };

  const handleBlur = () => setOpenProfileOptions(false);

  return (
    <div className={classes.container}>
      <MenuUserCard
        fullName={nameToDisplay}
        username={userCtx.username}
        onOptionClick={handleProfileOptionsClick}
      />
      {openProfileOptions && (
        <UserCardOptions
          onBlur={handleBlur}
          onViewProfile={handleViewProfile}
        />
      )}
      <MenuItems />
    </div>
  );
};

export default MenuUser;
