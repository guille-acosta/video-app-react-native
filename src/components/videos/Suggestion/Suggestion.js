import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
`;
const Left = styled.View``;
const Right = styled.View`
  padding-left: 10px;
  justify-content: space-between;
`;
const Cover = styled.Image`
  height: 150px;
  width: 100px;
  resize-mode: contain;
`;
const Title = styled.Text`
  font-size: 18px;
  color: #44546b;
`;
const Year = styled.Text`
  background-color: #70b124;
  padding: 4px 6px;
  color: white;
  text-align: center;
  border-radius: 5px;
  overflow: hidden;
  align-self: flex-start;
`;
const Rating = styled.Text`
  color: #6b6b6b;
  font-size: 14px;
  font-weight: bold;
`;
const Genre = styled.View`
  position: absolute;
  left: 0;
  top: 0;
  background-color: black;
`;
const GenreText = styled.Text`
  color: white;
  font-size: 11px;
  padding: 5px 7px;
`;

const Suggestion = ({medium_cover_image, genres, title, year, rating, id}) => {
  return (
    <Container key={id}>
      <Left>
        <Cover source={{uri: medium_cover_image}} />
        <Genre>
          <GenreText>{genres[0]}</GenreText>
        </Genre>
      </Left>
      <Right>
        <Title>{title}</Title>
        <Year>{year}</Year>
        <Rating>{rating}</Rating>
      </Right>
    </Container>
  );
};

export default Suggestion;
