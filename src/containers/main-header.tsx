import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainHeaderComponent from "../components/main-header";
import { shallowEqual } from "../libs/shallowEqual";
import { ReducersType } from "../store";
import { toggleAsideStatus } from "../store/theme/actions";
import { AsideStatusType } from "../store/theme/types";

const MainHeader: FC = () => {
  const dispatch = useDispatch();
  const asideStatus = useSelector<ReducersType, AsideStatusType>((state) => state.theme.asideStatus, shallowEqual);

  return <MainHeaderComponent toggleAside={() => dispatch(toggleAsideStatus())} asideStatus={asideStatus} />;
};

export default MainHeader;
