import React from 'react';
import { GenericList } from 'Components';
import { users } from './sampleData';

interface IUser {
  firstname: string;
  lastname: string;
}

export class UserList extends GenericList<IUser> {}

export default () => (
  <UserList
    items={users}
    itemRenderer={({ firstname, lastname }: IUser) => (
      <div key={firstname}>
        {firstname} {lastname}
      </div>
    )}
  />
);
