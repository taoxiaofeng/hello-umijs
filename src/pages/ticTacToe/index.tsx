import Game from '@/components/Game';
import { PageContainer } from '@ant-design/pro-components';
import React from 'react';

const TableList: React.FC<unknown> = () => {
  return (
    <PageContainer
      header={{
        title: '井字棋游戏',
      }}
    >
      <Game />
    </PageContainer>
  );
};

export default TableList;
