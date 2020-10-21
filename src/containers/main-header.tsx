import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import MainHeaderComponent from "../components/main-header";
import { UserProps } from "../components/modules/user";
import { shallowEqual } from "../libs/shallowEqual";
import { ReducersType } from "../store";
import { setPopupUser, toggleAsideStatus } from "../store/theme/actions";
import { AsideStatusType } from "../store/theme/types";
import { ChatParamsType } from "./main";

const MainHeader: FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams<ChatParamsType>();
  const asideStatus = useSelector<ReducersType, AsideStatusType>((state) => state.theme.asideStatus, shallowEqual);

  const { state } = useLocation();
  const { initials, avatar, color, name, message } = (state as UserProps) || {};

  const openUserPopup = () => {
    dispatch(setPopupUser({ initials, avatar, color, name, message }));
  };

  return (
    <MainHeaderComponent
      openUserPopup={openUserPopup}
      toggleAside={() => dispatch(toggleAsideStatus())}
      asideStatus={asideStatus}
      isInChat={id !== undefined}
      user={{ initials, avatar, color, name, message }}
    />
  );
};

export default MainHeader;
