import {styled} from '@linaria/react'
import {SectionContainer} from '../shared/Containers'
import {desktopMinWidth, tabletMinWidth} from '../../constants/theme'
import img from './portrait.jpg'

const Heading = () => {
  const experience = new Date().getFullYear() - 2013
  return (
    <Container as="header">
      <PhotoContainer>
        <Photo />
      </PhotoContainer>
      <Name>Sergey Bogdanov</Name>
      <Position>Consultant Frontend Web Developer, Stockholm</Position>
      <Contacts>
        <a href="https://www.linkedin.com/in/sergey-bogdanov-a0429646/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <Separator aria-hidden="true">·</Separator>
        <a href="mailto:sergey.bogdanov.jr@gmail.com">sergey.bogdanov.jr@gmail.com</a>
      </Contacts>
      <Description>
        Software developer with {experience} years of full-time Web and 3 years IBM Lotus Notes development. Passionate
        about UX/UI, having the codebase properly arranged, writing the most reusable code which everyone could easily
        understand, getting into the most difficult tasks finding the best solutions. Specialist diploma in Applied
        Mathematics (equivalent of a master`s degree), Russian State University for Humanities (RSUH). Moscow, Russia
      </Description>
    </Container>
  )
}

const Container = styled(SectionContainer)`
  display: grid;
  align-items: start;
  column-gap: calc(var(--spacing) * 4);
  row-gap: calc(var(--spacing) * 1.5);
  color: var(--color-primary);
  padding-bottom: calc(var(--spacing) * 4);
  border-bottom: var(--border);
  grid-template-areas:
    'photo'
    'name'
    'position'
    'contacts'
    'description';
  justify-items: center;
  text-align: center;
  ${tabletMinWidth} {
    grid-template-areas:
      'photo name'
      'photo position'
      'photo contacts'
      'description description';
    grid-template-columns: auto 1fr;
    justify-items: start;
    text-align: left;
  }
  ${desktopMinWidth} {
    grid-template-areas:
      'photo name'
      'photo position'
      'photo contacts'
      'photo description';
    grid-template-columns: 180px 1fr;
  }
`
const PhotoContainer = styled.div`
  grid-area: photo;
  ${tabletMinWidth} {
    align-self: start;
  }
`
const Photo = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: url(${img}) center / cover no-repeat, var(--bg-secondary);
  background-position-y: bottom;
  border: 1px solid var(--border-color);
  ${desktopMinWidth} {
    width: 170px;
    height: 170px;
  }
`
const Name = styled.h1`
  font-size: 2.25rem;
  line-height: 1.15;
  letter-spacing: -0.02em;
  font-weight: 600;
  grid-area: name;
  margin: 0;
  align-self: end;
`
const Position = styled.h2`
  font-size: 1.05rem;
  font-weight: 500;
  color: var(--color-secondary);
  margin: 0;
  grid-area: position;
`
const Description = styled.p`
  margin: calc(var(--spacing) * 1.5) 0 0;
  grid-area: description;
  color: var(--color-secondary);
  max-width: 62ch;
`
const Contacts = styled.div`
  grid-area: contacts;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: calc(var(--spacing) * 1);
  font-size: 0.95rem;
`
const Separator = styled.span`
  color: var(--border-color);
`

export default Heading
