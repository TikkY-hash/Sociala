import React from 'react';

import styled from 'styled-components';

const DivHeader = styled.div`
      display : flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-bottom: 20px;
      h1 {
        font-size: 26px;
      }
      h2{
        font-size: 1.2rem;
        color: grey;
      }
`


const AppHeader = ({countLike,count}) => {
    return (
      <DivHeader>
          <h1>Kirill Kovalenko</h1>
          <h2>{count} записей,из них понравилось {countLike}</h2>
      </DivHeader>
    )
}

export default AppHeader