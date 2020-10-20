import { colors } from "@material-ui/core";
import React, { FC, memo } from "react";
import { shallowEqual } from "../libs/shallowEqual";
import { direction } from "../themes";
import { AvatarSizeType } from "./avatar";
import UserComponent from "./user";

const AsideContactsComponent: FC = () => {
  return (
    <div dir={direction}>
      {Array.from(Array(50), (e, i) => (
        <UserComponent key={i} initials={"A"} avatar={undefined} color={colors.indigo["300"]} size={AvatarSizeType.MEDIUM} name={"علیرضا ملکی"} message={"10 دقیقه پیش"} />
      ))}
    </div>
  );
};

export default memo(AsideContactsComponent, shallowEqual);
