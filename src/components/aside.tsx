import { AppBar, colors, Tab, Tabs } from "@material-ui/core";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import PermContactCalendarOutlinedIcon from "@material-ui/icons/PermContactCalendarOutlined";
import React, { FC, memo, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import "../assets/scss/index.scss";
import AsideHeader from "../containers/aside-header";
import { shallowEqual } from "../libs/shallowEqual";
import { AsideStatusType } from "../store/theme/types";
import { direction } from "../themes";
import styles from "./aside.module.scss";
import { AvatarSizeType } from "./avatar";
import UserComponent from "./user";

enum AsideTabs {
  CONTACTS = 0,
  CHATS = 1,
}

type Props = {
  asideStatus: AsideStatusType;
};

const AsideComponent: FC<Props> = (props) => {
  const [index, setIndex] = useState<AsideTabs>(AsideTabs.CHATS);

  return (
    <aside className={`shadow h-100 d-flex flex-column justify-content-start ${styles.aside} ${props.asideStatus ? styles.active : ""}`}>
      <AsideHeader />
      <SwipeableViews className="col p-0" axis={direction === "rtl" ? "x" : "x-reverse"} index={index} onChangeIndex={setIndex}>
        <div dir={direction} className="px-1">
          {Array.from(Array(50), (e, i) => {
            return <UserComponent key={i} initials={"A"} avatar={undefined} color={colors.indigo["300"]} size={AvatarSizeType.MEDIUM} name={"علیرضا ملکی"} message={"10 دقیقه پیش"} />;
          })}
        </div>
        <div dir={direction} className="px-1">
          {Array.from(Array(50), (e, i) => {
            return (
              <UserComponent
                key={i}
                initials={"A"}
                unreadCount={2}
                avatar={undefined}
                color={colors.indigo["300"]}
                size={AvatarSizeType.MEDIUM}
                name={"علیرضا ملکی"}
                time={"12:58"}
                message={"لورم ایپسوم متنی ساختگی از صنعت چاپ و گرافیک است."}
              />
            );
          })}
        </div>
      </SwipeableViews>
      <AppBar position="static" className="shadow-lg">
        <Tabs color="primary" indicatorColor="secondary" value={index} onChange={(e, v) => setIndex(v)}>
          <Tab value={AsideTabs.CHATS} className="col" icon={<ChatBubbleOutlineOutlinedIcon />} />
          <Tab value={AsideTabs.CONTACTS} className="col" icon={<PermContactCalendarOutlinedIcon />} />
        </Tabs>
      </AppBar>
    </aside>
  );
};

export default memo(AsideComponent, shallowEqual);
