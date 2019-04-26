import styled from 'styled-components';
import hero_bg from './hero_bg.jpg';

const HeroContainer = styled.div`
  width: 100%;
  height: 20em;
  background-image: url(${hero_bg});
  background-position: bottom;
  background-size: cover;
  background-attachment: fixed;
  margin: 5em 0 0;

  section {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins', Arial, Helvetica Neue, Helvetica, sans-serif;
    color: #fff;
  }

  h1 {
    font-size: 1.75em;
    @media (min-width: 768px) {
      font-size: 2.75em;
    }
  }

  p {
    max-width: 80%;
  }
`;

export default HeroContainer;
