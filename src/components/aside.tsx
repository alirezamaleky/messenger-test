import { AppBar, colors, Tab, Tabs } from "@material-ui/core";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import PermContactCalendarOutlinedIcon from "@material-ui/icons/PermContactCalendarOutlined";
import React, { FC, memo, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import "../assets/scss/index.scss";
import { shallowEqual } from "../libs/shallowEqual";
import { direction } from "../themes";
import AsideHeaderComponent from "./aside-header";
import styles from "./aside.module.scss";
import { AvatarSizeType } from "./avatar";
import UserComponent from "./user";

const TabPanel: FC<any> = (props) => {
  return (
    <div hidden={props.value !== props.index} id={`tab-${props.index}`} {...props.other} dir={direction}>
      {props.value === props.index && (
        <div className="px-1">
          <span>{props.children}</span>
        </div>
      )}
    </div>
  );
};

enum AsideTabs {
  CONTACTS = 0,
  CHATS = 1,
}

const Aside: FC = () => {
  const [index, setIndex] = useState<AsideTabs>(AsideTabs.CHATS);

  return (
    <aside className={`shadow h-100 d-flex flex-column justify-content-start ${styles.aside}`}>
      <AsideHeaderComponent />
      <SwipeableViews className="col p-0" axis={direction === "rtl" ? "x" : "x-reverse"} index={index} onChangeIndex={setIndex}>
        <TabPanel value={index} index={AsideTabs.CONTACTS}>
          <UserComponent initials={"A"} avatar={undefined} color={colors.indigo["300"]} size={AvatarSizeType.MEDIUM} name={"علیرضا ملکی"} message={"10 دقیقه پیش"} />
          <UserComponent initials={"A"} avatar={undefined} color={colors.indigo["300"]} size={AvatarSizeType.MEDIUM} name={"علیرضا ملکی"} message={"10 دقیقه پیش"} />
          <UserComponent initials={"A"} avatar={undefined} color={colors.indigo["300"]} size={AvatarSizeType.MEDIUM} name={"علیرضا ملکی"} message={"10 دقیقه پیش"} />
          <UserComponent initials={"A"} avatar={undefined} color={colors.indigo["300"]} size={AvatarSizeType.MEDIUM} name={"علیرضا ملکی"} message={"10 دقیقه پیش"} />
          <UserComponent initials={"A"} avatar={undefined} color={colors.indigo["300"]} size={AvatarSizeType.MEDIUM} name={"علیرضا ملکی"} message={"10 دقیقه پیش"} />
          <UserComponent initials={"A"} avatar={undefined} color={colors.indigo["300"]} size={AvatarSizeType.MEDIUM} name={"علیرضا ملکی"} message={"10 دقیقه پیش"} />
          <UserComponent initials={"A"} avatar={undefined} color={colors.indigo["300"]} size={AvatarSizeType.MEDIUM} name={"علیرضا ملکی"} message={"10 دقیقه پیش"} />
          <UserComponent initials={"A"} avatar={undefined} color={colors.indigo["300"]} size={AvatarSizeType.MEDIUM} name={"علیرضا ملکی"} message={"10 دقیقه پیش"} />
          <UserComponent initials={"A"} avatar={undefined} color={colors.indigo["300"]} size={AvatarSizeType.MEDIUM} name={"علیرضا ملکی"} message={"10 دقیقه پیش"} />
          <UserComponent initials={"A"} avatar={undefined} color={colors.indigo["300"]} size={AvatarSizeType.MEDIUM} name={"علیرضا ملکی"} message={"10 دقیقه پیش"} />
          <UserComponent initials={"A"} avatar={undefined} color={colors.indigo["300"]} size={AvatarSizeType.MEDIUM} name={"علیرضا ملکی"} message={"10 دقیقه پیش"} />
          <UserComponent initials={"A"} avatar={undefined} color={colors.indigo["300"]} size={AvatarSizeType.MEDIUM} name={"علیرضا ملکی"} message={"10 دقیقه پیش"} />
          <UserComponent initials={"A"} avatar={undefined} color={colors.indigo["300"]} size={AvatarSizeType.MEDIUM} name={"علیرضا ملکی"} message={"10 دقیقه پیش"} />
          <UserComponent initials={"A"} avatar={undefined} color={colors.indigo["300"]} size={AvatarSizeType.MEDIUM} name={"علیرضا ملکی"} message={"10 دقیقه پیش"} />
          <UserComponent initials={"A"} avatar={undefined} color={colors.indigo["300"]} size={AvatarSizeType.MEDIUM} name={"علیرضا ملکی"} message={"10 دقیقه پیش"} />
          <UserComponent initials={"A"} avatar={undefined} color={colors.indigo["300"]} size={AvatarSizeType.MEDIUM} name={"علیرضا ملکی"} message={"10 دقیقه پیش"} />
          <UserComponent initials={"A"} avatar={undefined} color={colors.indigo["300"]} size={AvatarSizeType.MEDIUM} name={"علیرضا ملکی"} message={"10 دقیقه پیش"} />
          <UserComponent initials={"A"} avatar={undefined} color={colors.indigo["300"]} size={AvatarSizeType.MEDIUM} name={"علیرضا ملکی"} message={"10 دقیقه پیش"} />
          <UserComponent initials={"A"} avatar={undefined} color={colors.indigo["300"]} size={AvatarSizeType.MEDIUM} name={"علیرضا ملکی"} message={"10 دقیقه پیش"} />
          <UserComponent initials={"A"} avatar={undefined} color={colors.indigo["300"]} size={AvatarSizeType.MEDIUM} name={"علیرضا ملکی"} message={"10 دقیقه پیش"} />
          <UserComponent initials={"A"} avatar={undefined} color={colors.indigo["300"]} size={AvatarSizeType.MEDIUM} name={"علیرضا ملکی"} message={"10 دقیقه پیش"} />
          <UserComponent initials={"A"} avatar={undefined} color={colors.indigo["300"]} size={AvatarSizeType.MEDIUM} name={"علیرضا ملکی"} message={"10 دقیقه پیش"} />
          <UserComponent initials={"A"} avatar={undefined} color={colors.indigo["300"]} size={AvatarSizeType.MEDIUM} name={"علیرضا ملکی"} message={"10 دقیقه پیش"} />
          <UserComponent initials={"A"} avatar={undefined} color={colors.indigo["300"]} size={AvatarSizeType.MEDIUM} name={"علیرضا ملکی"} message={"10 دقیقه پیش"} />
          <UserComponent initials={"A"} avatar={undefined} color={colors.indigo["300"]} size={AvatarSizeType.MEDIUM} name={"علیرضا ملکی"} message={"10 دقیقه پیش"} />
          <UserComponent initials={"A"} avatar={undefined} color={colors.indigo["300"]} size={AvatarSizeType.MEDIUM} name={"علیرضا ملکی"} message={"10 دقیقه پیش"} />
          <UserComponent initials={"A"} avatar={undefined} color={colors.indigo["300"]} size={AvatarSizeType.MEDIUM} name={"علیرضا ملکی"} message={"10 دقیقه پیش"} />
          <UserComponent initials={"A"} avatar={undefined} color={colors.indigo["300"]} size={AvatarSizeType.MEDIUM} name={"علیرضا ملکی"} message={"10 دقیقه پیش"} />
          <UserComponent initials={"A"} avatar={undefined} color={colors.indigo["300"]} size={AvatarSizeType.MEDIUM} name={"علیرضا ملکی"} message={"10 دقیقه پیش"} />
        </TabPanel>
        <TabPanel value={index} index={AsideTabs.CHATS}>
          <UserComponent
            initials={"A"}
            unreadCount={2}
            avatar={undefined}
            color={colors.indigo["300"]}
            size={AvatarSizeType.MEDIUM}
            name={"علیرضا ملکی"}
            time={"12:58"}
            message={"لورم ایپسوم متنی ساختگی از صنعت چاپ و گرافیک است."}
          />
          <UserComponent
            initials={"A"}
            unreadCount={2}
            avatar={undefined}
            color={colors.indigo["300"]}
            size={AvatarSizeType.MEDIUM}
            name={"علیرضا ملکی"}
            time={"12:58"}
            message={"لورم ایپسوم متنی ساختگی از صنعت چاپ و گرافیک است."}
          />
          <UserComponent
            initials={"A"}
            unreadCount={2}
            avatar={undefined}
            color={colors.indigo["300"]}
            size={AvatarSizeType.MEDIUM}
            name={"علیرضا ملکی"}
            time={"12:58"}
            message={"لورم ایپسوم متنی ساختگی از صنعت چاپ و گرافیک است."}
          />
        </TabPanel>
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

export default memo(Aside, shallowEqual);
