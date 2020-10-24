import styled from 'styled-components'

export const StyledApp = styled.div`
  color: green;
`

export const CharacterList = styled.div`
  display: flex;
  flex-direction: column;
`

export const PaginationControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    margin-left: 10px;
    margin-right: 10px;
    padding: 5px 15px;
    border-radius: 5px;
    outline: none;
    font-weight: 600;
    background-color: #595a59;
    color: white;
  }

  button:disabled {
    color: grey;
    background-color: grey;
  }
`