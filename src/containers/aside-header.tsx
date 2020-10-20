import React, { FC } from "react";
import { useDispatch } from "react-redux";
import AsideHeaderComponent from "../components/aside-header";
import { toggleTheme } from "../store/theme/actions";

const AsideHeader: FC = () => {
  const dispatch = useDispatch();

  return <AsideHeaderComponent toggleTheme={() => dispatch(toggleTheme())} />;
};

export default AsideHeader;
