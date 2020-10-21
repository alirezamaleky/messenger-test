import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AsideContactsComponent from "../components/aside-contacts";
import { GET_CONTACTS } from "../constants/webservices";
import { restHandler } from "../libs/rest";
import { toggleAsideStatus } from "../store/theme/actions";

export type ContactsType = Array<{
  id: string;
  time: number;
  name: string;
  avatar: string;
  message: string;
  color: string;
}>;

const AsideContacts: FC = () => {
  const dispatch = useDispatch();
  const [contacts, setContacts] = useState<ContactsType>([]);

  useEffect(() => {
    restHandler({
      url: GET_CONTACTS,
    }).then((res) => setContacts(res.data));
  }, []);

  return <AsideContactsComponent contacts={contacts} closeAside={() => dispatch(toggleAsideStatus(false))} />;
};

export default AsideContacts;
