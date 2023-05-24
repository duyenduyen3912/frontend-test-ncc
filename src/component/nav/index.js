import classNames from "classnames/bind";
import style from "./Nav.module.scss";
const cx = classNames.bind(style);
function Nav() {
  return (
    <>
      <ul className={cx("nav")}>
        <li className={cx("nav-item")}>
          <a href="#" className={cx("item-link", "item-selected")}>
            Home
          </a>
        </li>
        <li className={cx("nav-item")}>
          <a href="#" className={cx("item-link")}>
            Services
          </a>
        </li>
        <li className={cx("nav-item")}>
          <a href="#" className={cx("item-link")}>
            News
          </a>
        </li>
        <li className={cx("nav-item")}>
          <a href="#" className={cx("item-link")}>
            Blog
          </a>
        </li>
        <li className={cx("nav-item")}>
          <a href="#" className={cx("item-link")}>
            Contact
          </a>
        </li>
      </ul>
    </>
  );
}

export default Nav;
