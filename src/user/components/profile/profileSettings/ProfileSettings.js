import classes from './ProfileSettings.module.css';
import ProfileSettingsForm from './ProfileSettingsForm';

const ProfileSettings = function (props) {
  return (
    <section className={classes.container}>
      <ProfileSettingsForm />
    </section>
  );
};

export default ProfileSettings;
