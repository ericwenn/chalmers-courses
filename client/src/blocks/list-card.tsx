import styled from 'styled-components';

export const ListCard = styled.div`
  padding: .5em;
  background-color: #dfe3e6;
  display:inline-block;
  vertical-align: top;
  margin-right: 1em;
  border-radius: 6px;
  width: 100%;
`;

export const ListCardTitle = styled.h2`
margin: 0;
font-size: 1em;
padding: .5em;
`;

export const ListCardContainer = styled.div`
  max-height: 500px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;
