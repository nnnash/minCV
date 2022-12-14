import {styled} from '@linaria/react'
import {SectionContainer} from '../shared/Containers'
import {borderedComponent, desktopMinWidth, tabletMinWidth} from '../../constants/theme'
import img from './portrait.png'

const Heading = () => (
  <Container as="header">
    <PhotoContainer>
      <Photo />
    </PhotoContainer>
    <Name>Sergey Bogdanov</Name>
    <Position>Consultant Frontend Web Developer, Stockholm</Position>
    <Description>
      Software developer with 8 years of full-time Web and 3 years IBM Lotus Notes development. Passionate about UX/UI,
      having the codebase properly arranged, writing the most reusable code which everyone could easily understand,
      getting into the most difficult tasks finding the best solutions. Specialist diploma in Applied Mathematics
      (equivalent of a master’s degree), Russian State University for Humanities (RSUH). Moscow, Russia
    </Description>
  </Container>
)

const Container = styled(SectionContainer)`
  display: grid;
  align-items: start;
  grid-gap: calc(var(--spacing) * 4);
  color: var(--color-primary);
  grid-template-areas:
    'photo'
    'name'
    'position'
    'description';
  ${tabletMinWidth} {
    grid-template-areas:
      'photo name'
      'photo position'
      'description description';
    grid-template-columns: 1fr 1fr;
  }
  ${desktopMinWidth} {
    grid-template-areas:
      'photo name'
      'photo position'
      'photo description';
    grid-template-columns: 3fr 7fr;
  }
`
const PhotoContainer = styled.div`
  grid-area: photo;
  position: relative;
`
const Photo = styled.div`
  max-width: 300px;
  margin: 0 auto;
  background: url(${img});
  background-size: contain;
  image-rendering: pixelated;
  ${borderedComponent}
  :after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`
const Name = styled.h1`
  font-size: 4rem;
  grid-area: name;
  margin: calc(var(--spacing) * 2) 0 0;
`
const Position = styled.h1`
  color: var(--color-secondary);
  margin: 0;
  grid-area: position;
`
const Description = styled.p`
  margin: 0;
  grid-area: description;
`

export default Heading
