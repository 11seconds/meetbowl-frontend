import styled from 'styled-components';
import Slider from 'react-slick';

type NameSliderProps = {
  children: JSX.Element | JSX.Element[];
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  & div.name-grid {
    display: grid !important;
    // react-slick 을 위한 스타일 설정
  }

  & .slick-dots {
    bottom: -20px !important;
  }
`;

const NameSlider = ({ children }: NameSliderProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <Slider {...settings}>{children}</Slider>
    </Wrapper>
  );
};

export default NameSlider;
