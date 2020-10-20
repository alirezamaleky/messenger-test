import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AsideComponent from "../components/aside";
import { shallowEqual } from "../libs/shallowEqual";
import { ReducersType } from "../store";
import { toggleAsideStatus } from "../store/theme/actions";
import { AsideStatusType } from "../store/theme/types";
import { ChatParamsType } from "./main";

const Aside: FC = () => {
  const { id } = useParams<ChatParamsType>();
  const asideStatus = useSelector<ReducersType, AsideStatusType>((state) => state.theme.asideStatus, shallowEqual);
  const dispatch = useDispatch();

  return <AsideComponent asideStatus={asideStatus} isInChat={id !== undefined} closeAside={() => dispatch(toggleAsideStatus(false))} />;
};

export default Aside;
