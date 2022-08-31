import React, { useEffect, useRef, useState } from 'react';

import { reqResApi } from '../api/reqRes';
import { ReqResListado, User } from '../interfaces/reqRes';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  const pageRef = useRef(1);

  useEffect(() => {
    renderUsers();

    return () => {};
  }, []);

  //
  const renderUsers = async () => {
    //
    const resp = await reqResApi.get<ReqResListado>('/users', {
      params: {
        page: pageRef.current,
      },
    });

    if (resp.data.data.length > 0) {
      setUsers(resp.data.data);
    } else {
      pageRef.current--;
      //alert('No hay más registros');
    }
  };

  //
  const nextPage = () => {
    pageRef.current++;
    renderUsers();
  };

  const previousPage = () => {
    if (pageRef.current > 1) {
      pageRef.current--;
      renderUsers();
    }
  };

  return {
    users,
    renderUsers,
    nextPage,
    previousPage,
  };
};
