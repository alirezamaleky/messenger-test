import { colors } from "@material-ui/core";
import React, { FC, memo } from "react";
import { shallowEqual } from "../libs/shallowEqual";
import { direction } from "../themes";
import { AvatarSizeType } from "./avatar";
import UserComponent from "./user";

const AsideMembersComponent: FC = () => {
  return (
    <div dir={direction}>
      {Array.from(Array(50), (e, i) => (
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
      ))}
    </div>
  );
};

export default memo(AsideMembersComponent, shallowEqual);
