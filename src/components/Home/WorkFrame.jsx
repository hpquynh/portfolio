// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import { moveToRight, colorChange, backgroundChange } from '../../styles/keyframes';
import { mediaMax, fontSize } from '../../styles/utils';

type Props = {
  image: string,
  isAnimated: boolean,
}
export default class WorkFrame extends React.PureComponent<Props> {
  render() {
    const { image, isAnimated } = this.props;
    return (
      <FrameBlock isAnimated={isAnimated}>
        <img src={image} alt="object" />
      </FrameBlock>
    );
  }
}

const FrameBlock = styled.div`
  width: 300px;
  height: 400px;
  max-width: 100%;
  padding: 15px;
  display: flex;
  align-items: flex-end;
  background-color: ${props => props.theme.color.mist};
  position: relative;
  transform: translate(-50%,0);
  &:before{
    content: "heartmade by me";
    position: absolute;
    top: 30px;
    left: 20px;
    ${fontSize('45px')}
    color: ${props => props.theme.color.shadow};
  }
  img{
    width: 360px;
    min-height: 198px;
    
  }
  ${props => props.isAnimated && css`
    animation: ${backgroundChange} 6s ease, ${moveToRight} 3s ease;
    transform: translate(30%,0);
    &:before{
      animation: ${colorChange} 6s ease;
    }
  `}
  ${mediaMax.sm`
    transform: translate(0,0);
  `}
`;
