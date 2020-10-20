import { colors } from "@material-ui/core";
import React, { FC, memo } from "react";
import { ROUTE_MESSENGER_CHAT } from "../constants/routes";
import { memoryHistory } from "../index";
import { shallowEqual } from "../libs/shallowEqual";
import { direction } from "../themes";
import { AvatarSizeType } from "./avatar";
import UserComponent from "./user";

type Props = {
  closeAside: () => void;
};

const AsideMembersComponent: FC<Props> = (props) => {
  return (
    <div dir={direction}>
      {Array.from(Array(50), (e, i) => (
        <UserComponent
          onClick={() => {
            memoryHistory.push(ROUTE_MESSENGER_CHAT.replace(":id?", "i"), {
              initials: i,
              avatar: undefined,
              color: colors.indigo["300"],
              name: "علیرضا ملکی",
              message: "12:58",
            });
            props.closeAside();
          }}
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
      ))}
    </div>
  );
};

export default memo(AsideMembersComponent, shallowEqual);
