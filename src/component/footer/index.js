import classNames from "classnames/bind";
import style from "./Footer.module.scss";

const cx = classNames.bind(style);
function Footer() {
  return (
    <>
      <div className={cx("footer")}>
        <p className={cx("copyright")}>Copyright © 2021</p>
      </div>
    </>
  );
}

export default Footer;
