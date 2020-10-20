import React, { FC } from "react";
import { useSelector } from "react-redux";
import AsideComponent from "../components/aside";
import { shallowEqual } from "../libs/shallowEqual";
import { ReducersType } from "../store";
import { AsideStatusType } from "../store/theme/types";

const Aside: FC = () => {
  const asideStatus = useSelector<ReducersType, AsideStatusType>((state) => state.theme.asideStatus, shallowEqual);

  return <AsideComponent asideStatus={asideStatus} />;
};

export default Aside;
