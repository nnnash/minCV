import {FormEvent, KeyboardEvent, useState} from 'react'
import {styled} from '@linaria/react'
import Textarea from 'react-textarea-autosize'
import {SectionContainer} from '../shared/Containers'
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
      {showSearchResults &&
        (!!noMatchResult ? (
          <NoMatch>No match (or maybe it`s just a wrong parsing ;)</NoMatch>
        ) : (
          !!searchResult && <SearchResults {...searchResult} />
        ))}
    </>
  )
}

const SearchInput = () => {
  const [val, setVal] = useState('')
  const {setResult, clearSearchResult, showSearchResults} = useAppContext()
  const runSearch = () => setResult(searchWithList(val))
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    runSearch()
  }
  // The input is a textarea so that a whole list can be pasted, but a plain
  // Enter should search; Shift+Enter still adds a new line.
  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key !== 'Enter' || e.shiftKey) return
    e.preventDefault()
    runSearch()
  }
  return (
    <Container onSubmit={onSubmit}>
      <InputWrapper>
        <Input
          value={val}
          onChange={({target}) => setVal(target.value)}
          onKeyDown={onKeyDown}
          placeholder="Search tech experience..."
        />
        {!!(val || showSearchResults) && (
          <ClearBtn
            type="button"
            aria-label="Clear search"
            onClick={() => {
              setVal('')
              clearSearchResult()
            }}
          >
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
              <path
                d="M2.5 2.5l11 11M13.5 2.5l-11 11"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </ClearBtn>
        )}
      </InputWrapper>
      <Submit type="submit">Search</Submit>
    </Container>
  )
}

const Container = styled.form`
  display: flex;
  align-items: stretch;
  gap: calc(var(--spacing) * 1.5);
`
const InputWrapper = styled.div`
  position: relative;
  flex: 1;
  display: flex;
`
const Input = styled(Textarea)`
  background: var(--bg-primary);
  width: 100%;
  color: var(--color-primary);
  padding: calc(var(--spacing) * 1.25) calc(var(--spacing) * 5);
  padding-left: calc(var(--spacing) * 1.5);
  outline: none;
  resize: none;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
  ::placeholder {
    color: #9aa5b1;
  }
  :focus {
    border-color: var(--color-accent);
    box-shadow: 0 0 0 3px rgba(47, 93, 143, 0.12);
  }
`
const ClearBtn = styled.button`
  position: absolute;
  right: calc(var(--spacing) * 1);
  top: calc(var(--spacing) * 1);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 26px;
  width: 26px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: none;
  color: var(--color-secondary);
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
  :hover {
    background: var(--bg-secondary);
    color: var(--color-primary);
  }
`
const Submit = styled.button`
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  white-space: nowrap;
  background: var(--action-bg);
  color: var(--action-color);
  padding: calc(var(--spacing) * 1.25) calc(var(--spacing) * 2.5);
  border: 1px solid var(--action-bg);
  border-radius: var(--radius);
  transition: background 0.15s ease, border-color 0.15s ease;
  :hover {
    background: var(--color-accent-dark);
    border-color: var(--color-accent-dark);
  }
`
const NoMatch = styled.h3`
  margin: 0 calc(var(--spacing) * 2);
  font-weight: 500;
  color: var(--color-secondary);
`

export default TechSearch
