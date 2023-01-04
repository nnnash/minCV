import React, {useCallback, useState} from 'react'
import {SearchResult} from './types/search'

interface ContextValue {
  searchResult?: SearchResult
  noMatchResult?: boolean
  showSearchResults?: boolean
  setResult: (res: SearchResult) => void
  clearSearchResult: () => void
}

export const AppContext = React.createContext<ContextValue>({setResult: () => '', clearSearchResult: () => ''})
AppContext.displayName = 'AppContext'

export const AppContextProvider = ({children}: {children: React.ReactNode}) => {
  const [result, setResult] = useState<SearchResult>()
  const [noMatch, setNoMatch] = useState<boolean>()
  const [showSearch, setShowSearch] = useState<boolean>()
  const setSearchResult = useCallback((res: SearchResult) => {
    setResult(res)
    setNoMatch(!res.enterpriseExperience.length && !res.petExperience.length)
    setShowSearch(true)
  }, [])
  const clearSearchResult = useCallback(() => {
    setShowSearch(false)
  }, [])
  return (
    <AppContext.Provider
      value={{
        setResult: setSearchResult,
        searchResult: result,
        noMatchResult: noMatch,
        showSearchResults: showSearch,
        clearSearchResult,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = React.useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppContext')
  }
  return context
}
