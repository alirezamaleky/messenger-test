import React, { FC, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Aside from "../containers/aside";
import Main from "../containers/main";
import { shallowEqual } from "../libs/shallowEqual";
import { ReducersType } from "../store";
import { setPopupUser } from "../store/theme/actions";
import { PopupUserType } from "../store/theme/types";
import styles from "./messenger.module.scss";
import ProfilePopup from "./modules/profile";

const MessengerComponent: FC = () => {
  const dispatch = useDispatch();
  const member = useSelector<ReducersType, PopupUserType>((state) => state.theme.popupUser, shallowEqual);

  return (
    <div className={`d-flex flex-nowrap ${styles.messenger}`}>
      <Aside />
      <Main />
      <ProfilePopup closePopup={() => dispatch(setPopupUser(undefined))} member={member} />
    </div>
  );
};

export default memo(MessengerComponent, shallowEqual);
