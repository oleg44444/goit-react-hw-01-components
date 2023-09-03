import { MainContainer, Section } from './App.styled';
import React from 'react';
import user from '../../path/to/user.json';
import data from 'path/to/data.json';
import friends from '../../path/to/friends.json';
import transactions from '../../path/to/transactions.json';
import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <MainContainer>
      <Section>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section>
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </Section>
      <Section>
        <FriendList friends={friends} />
      </Section>
      <Section>
        <TransactionHistory items={transactions} />;
      </Section>
    </MainContainer>
  );
};
