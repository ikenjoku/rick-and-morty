import React, { useEffect, useState } from 'react';
import {
  Author,
  StyledFooter,
  PageNumberInput,
  PaginationControls,
} from './styles'
import { useRickAndMorty } from '../context/RickAndMortyProvider';

function Footer () {
  const [currentPage, setCurrentPage] = useState(0)
  const [selectPage, setSelectPage] = useState(1)
  const handleGoToPage = (e) => {
    e.preventDefault()
    goToPage(selectPage)
  }
  const { state: { current_characters, info: { prev, next, pages } }, goBack, goNext, goToPage } = useRickAndMorty()
  const PrevPage = !!prev
  const NextPage = !!next

  useEffect(() => {
    const getCurrentPage = () => {
      if (next) {
        const nextPage = next.split('page=')[1]
        return parseInt(nextPage) - 1
      }
      return pages
    }
    const currentPage = getCurrentPage()
    setCurrentPage(currentPage)
  }, [next, pages])

  return (
    <StyledFooter>
      {current_characters.length ?
        <PaginationControls>
          <button disabled={!PrevPage} onClick={goBack} >Back</button>
          <p>Showing {currentPage} of {pages} pages</p>
          <button disabled={!NextPage} onClick={goNext} >Next</button>
        </PaginationControls> : ''}
        <PaginationControls>
          <span>Go to Page</span>
          <form>
          <PageNumberInput value={selectPage} onChange={(e) => setSelectPage(e.target.value)} type={'number'} max={pages} />
          <button onClick={handleGoToPage}>Go</button>
          </form>
        </PaginationControls>
        <Author>by Ikechukwu Njoku 2020</Author>
    </StyledFooter>
  )
}

export default Footer
