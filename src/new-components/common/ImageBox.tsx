import React from 'react';
import styled from 'styled-components';

const Contain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const Img = styled.img<{ height?: string }>`
  height: ${(props) => props.height || '10vmin'};
`;

type Image = {
  src: string;
  alt: string;
  href: string;
};

type Props = {
  images: Image[];
  height?: string;
};

export const ImageBox = ({ images, height }: Props) => {
  return (
    <Contain>
      {images.map((image) => (
        <a href={image.href} target="_blank" rel="noreferrer">
          <Img height={height} src={image.src} alt={image.alt} />
        </a>
      ))}
    </Contain>
  );
};
