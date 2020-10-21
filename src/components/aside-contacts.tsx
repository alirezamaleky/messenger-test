import React, { FC, memo } from "react";
import { ContactsType } from "../containers/aside-contacts";
import { fromNow } from "../libs/date";
import { shallowEqual } from "../libs/shallowEqual";
import { direction } from "../themes";
import { AvatarSizeType } from "./avatar";
import UserComponent from "./user";

type Props = {
  contacts: ContactsType;
  closeAside: () => void;
};

const AsideContactsComponent: FC<Props> = (props) => {
  return (
    <div dir={direction}>
      {props.contacts.map((contact) => (
        <UserComponent
          onClick={props.closeAside}
          size={AvatarSizeType.MEDIUM}
          key={contact.id}
          initials={contact.name.charAt(0)}
          avatar={contact.avatar}
          color={contact.color}
          name={contact.name}
          message={fromNow(contact.time)}
        />
      ))}
    </div>
  );
};

export default memo(AsideContactsComponent, shallowEqual);
