import {FormEvent, useState} from 'react'
import {styled} from '@linaria/react'
import {SectionContainer} from '../shared/Containers'
import {borderedComponent} from '../../constants/theme'
import {useAppContext} from '../../context'
import {searchWithList} from './searchTechs'
import SearchResults from './SearchResults'

const TechSearch = () => {
  const {searchResult, showSearchResults, noMatchResult} = useAppContext()

  return (
    <>
      <SectionContainer>
        <SearchInput />
      </SectionContainer>
      {!!noMatchResult ? (
        <NoMatch>No match (or maybe it`s just a wrong parsing ;)</NoMatch>
      ) : (
        !!searchResult && showSearchResults && <SearchResults {...searchResult} />
      )}
    </>
  )
}

const SearchInput = () => {
  const [val, setVal] = useState('')
  const {setResult, clearSearchResult, showSearchResults} = useAppContext()
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const res = searchWithList(val)
    setResult(res)
  }
  return (
    <Container onSubmit={onSubmit}>
      <Input value={val} onChange={({target}) => setVal(target.value)} placeholder="Search tech experience..." />
      {!!(val || showSearchResults) && (
        <ClearBtnWrapper>
          <ClearBtn
            type="button"
            onClick={() => {
              setVal('')
              clearSearchResult()
            }}
          >
            ×
          </ClearBtn>
        </ClearBtnWrapper>
      )}
      <Submit type="submit" value="Submit">
        Search
      </Submit>
    </Container>
  )
}

const Container = styled.form`
  display: flex;
  align-items: start;
`
const Input = styled.textarea`
  background: var(--bg-primary);
  width: 100%;
  min-height: calc(var(--spacing) * 3);
  height: calc(var(--spacing) * 3);
  padding: calc(var(--spacing) * 2);
  padding-right: calc(var(--spacing) * 8);
  outline: none;
  font-size: 1.2rem;
  ${borderedComponent}
`
const ClearBtnWrapper = styled.div`
  position: relative;
`
const ClearBtn = styled.button`
  position: absolute;
  left: calc(var(--spacing) * -7);
  top: calc(var(--spacing) * -3);
  border: none;
  background: none;
  font-size: 5rem;
  cursor: pointer;
  :hover {
    color: var(--color-secondary);
  }
`
const Submit = styled.button`
  cursor: pointer;
  margin-left: calc(var(--spacing) * 2);
  font-size: 2rem;
  font-weight: bold;
  background: var(--action-bg);
  color: var(--action-color);
  padding: var(--spacing);
  :hover {
    background: var(--action-color);
    color: var(--action-bg);
  }
  ${borderedComponent}
`
const NoMatch = styled.h3`
  margin: var(--spacing);
`

export default TechSearch
