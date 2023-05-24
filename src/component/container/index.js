import classNames from "classnames/bind";
import Footer from "../footer";
import style from "./Container.module.scss";

const cx = classNames.bind(style);

function Container() {
  return (
    <>
      <div className={cx("container")}>
        <div className={cx("container-img-wrap")}>
          <img
            className={cx("container-img")}
            src={require("../../assets/logo.jpg")}
          />
        </div>
        <div className={cx("container-intro")}>
          <div className={cx("intro-heading")}>
            Lorem ipsum dolor sit asmet?
          </div>
          <div className={cx("intro-describe")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tristique consequat placerat. Vestibulum auctor pellentesque sem, eu
            posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam
            facilisis, ligula in mattis sodales, augue justo tristique nulla,
            sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel
            mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend
            convallis. Quisque suscipit maximus vestibulum. Phasellus congue
            mollis orci, sit amet luctus augue tristique eu. Donec vulputate
            odio neque, sed semper turpis pellentesque a.
          </div>
        </div>
        <div className={cx("container-post")}>
          <div className={cx("post-item")}>
            <div className={cx("post-heading")}>Lorem ipsum dolor sit amet</div>
            <div className={cx("post-content")}>
              <img
                className={cx("post-img")}
                src={require("../../assets/css.jpg")}
              />
            </div>
            <p className={cx("post-describe")}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
              suscipit accumsan. Aenean consequat condimentum velit ut tempor.
              Nam porta massa in metus bibendum congue. Pellentesque ultrices
              liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit
              nulla, vel sodales est ullamcorper id. Aenean consequat
              condimentum velit ut tempor. Nam porta massa in metus bibendum
              congue. Pellentesque ultrices vestibulum mattis.
            </p>
          </div>
          <div className={cx("post-item")}>
            <div className={cx("post-heading")}>Lorem ipsum dolor sit amet</div>
            <div className={cx("post-content")}>
              <img
                className={cx("post-img")}
                src={require("../../assets/dw.jpg")}
              />
            </div>
            <p className={cx("post-describe")}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
              suscipit accumsan. Aenean consequat condimentum velit ut tempor.
              Nam porta massa in metus bibendum congue. Pellentesque ultrices
              liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit
              nulla, vel sodales est ullamcorper id. Aenean consequat
              condimentum velit ut tempor. Nam porta massa in metus bibendum
              congue. Pellentesque ultrices vestibulum mattis.
            </p>
          </div>
          <div className={cx("post-item")}>
            <div className={cx("post-heading")}>Lorem ipsum dolor sit amet</div>
            <div className={cx("post-content")}>
              <img
                className={cx("post-img")}
                src={require("../../assets/url.jpg")}
              />
            </div>
            <p className={cx("post-describe")}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
              suscipit accumsan. Aenean consequat condimentum velit ut tempor.
              Nam porta massa in metus bibendum congue. Pellentesque ultrices
              liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit
              nulla, vel sodales est ullamcorper id. Aenean consequat
              condimentum velit ut tempor. Nam porta massa in metus bibendum
              congue. Pellentesque ultrices vestibulum mattis.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Container;
