import { AppBar, Tab, Tabs } from "@material-ui/core";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import PermContactCalendarOutlinedIcon from "@material-ui/icons/PermContactCalendarOutlined";
import React, { FC, memo, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import AsideContacts from "../containers/aside-contacts";
import AsideHeader from "../containers/aside-header";
import AsideMembers from "../containers/aside-members";
import { shallowEqual } from "../libs/shallowEqual";
import { AsideStatusType } from "../store/theme/types";
import { direction } from "../themes";
import styles from "./aside.module.scss";

enum AsideTabs {
  CHATS = 0,
  CONTACTS = 1,
}

type Props = {
  asideStatus: AsideStatusType;
  isInChat: boolean;
  closeAside: () => void;
};

const AsideComponent: FC<Props> = (props) => {
  const [index, setIndex] = useState<AsideTabs>(AsideTabs.CHATS);

  return (
    <aside className={`shadow h-100 d-flex flex-column justify-content-start ${styles.aside} ${props.asideStatus ? styles.active : props.isInChat ? "" : styles.full_width}`}>
      <AsideHeader />
      <SwipeableViews className="col p-0" axis={direction === "rtl" ? "x" : "x-reverse"} index={index} onChangeIndex={setIndex}>
        <AsideMembers />
        <AsideContacts />
      </SwipeableViews>
      <AppBar position="static" className="shadow-lg">
        <Tabs color="primary" indicatorColor="secondary" value={index} onChange={(e, v) => setIndex(v)}>
          <Tab value={AsideTabs.CONTACTS} className="col" icon={<PermContactCalendarOutlinedIcon />} />
          <Tab value={AsideTabs.CHATS} className="col" icon={<ChatBubbleOutlineOutlinedIcon />} />
        </Tabs>
      </AppBar>
    </aside>
  );
};

export default memo(AsideComponent, shallowEqual);
