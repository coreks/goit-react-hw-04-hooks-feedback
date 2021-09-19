import PropTypes from "prop-types";
import css from "../Notification/Notification.module.css";

const Notification = ({ message }) => {
  return <div className={css.notification}>{message}</div>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string,
};
