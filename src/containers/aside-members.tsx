import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AsideMembersComponent from "../components/aside-members";
import { GET_MEMBERS } from "../constants/webservices";
import { restHandler } from "../libs/rest";
import { toggleAsideStatus } from "../store/theme/actions";

export type MembersType = Array<{
  id: string;
  time: number;
  name: string;
  avatar: string;
  message: string;
  color: string;
  unreadCount: number;
}>;

const AsideMembers: FC = () => {
  const dispatch = useDispatch();
  const [members, setMembers] = useState<MembersType>([]);

  useEffect(() => {
    restHandler({
      url: GET_MEMBERS,
    }).then((res) => setMembers(res.data));
  }, []);

  return <AsideMembersComponent members={members} closeAside={() => dispatch(toggleAsideStatus(false))} />;
};

export default AsideMembers;
