import React, { FC, memo } from "react";
import { ROUTE_MESSENGER_CHAT } from "../constants/routes";
import { MembersType } from "../containers/aside-members";
import { memoryHistory } from "../index";
import { fromNow } from "../libs/date";
import { shallowEqual } from "../libs/shallowEqual";
import { direction } from "../themes";
import { AvatarSizeType } from "./avatar";
import UserComponent from "./user";

type Props = {
  members: MembersType;
  closeAside: () => void;
};

const AsideMembersComponent: FC<Props> = (props) => {
  return (
    <div dir={direction}>
      {props.members.map((member) => (
        <UserComponent
          onClick={() => {
            memoryHistory.push(ROUTE_MESSENGER_CHAT.replace(":id?", "i"), {
              initials: member.name.charAt(0),
              avatar: member.avatar,
              color: member.color,
              name: member.name,
              message: fromNow(member.time),
            });
            props.closeAside();
          }}
          key={member.id}
          initials={member.name.charAt(0)}
          unreadCount={member.unreadCount}
          avatar={member.avatar}
          color={member.color}
          name={member.name}
          time={fromNow(member.time)}
          message={member.message}
          size={AvatarSizeType.MEDIUM}
        />
      ))}
    </div>
  );
};

export default memo(AsideMembersComponent, shallowEqual);
