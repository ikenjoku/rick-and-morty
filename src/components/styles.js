import styled from 'styled-components'

export const StyledApp = styled.div`
  color: green;
`

export const Headers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 300px;
  border-bottom: 2px solid;

  &> h1 {
    font-size: 4rem;
  }
  @media (max-width: 650px) {
    &> h1 {
    font-size: 3rem;
  }
  }
`

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4.5rem 0px;
  background: ${({ theme }) => theme.listContainerBackground};
  min-height: calc(50vh - 60px);
`

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1920px;
`

export const CardBox = styled.div`
  width: 600px;
  height: 220px;
  display: flex;
  overflow: hidden;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.cardBoxBackground};
  border-radius: 0.5rem;
  margin: 0.75rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
   rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

   @media (max-width: 650px) {
    flex-direction: column;
    height: initial;
    width: 100%;
  }
`



export const ImageWrapper = styled.div`
  flex: 2 1 0%;
  width: 100%;
`

export const DetailWrapper = styled.div`
  flex: 3 1 0%;
  position: relative;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
    width: 0;
    height: 0;
    }
`

export const CharacterImage = styled.img`
  width: 100%;
  height: 100%;
  margin: 0px;
  opacity: 1;
  transition: opacity 0.5s ease 0s;
  object-position: center center;
  object-fit: cover;
  display: block;
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 0.8125rem;
`

export const Name = styled.h2`
  margin: 0px;
  padding: 0px;
  font-size: 1.5rem;

  :hover {
    color: green;
  }
`

export const More = styled.p`
  margin-bottom: 10px;

  :hover {
    color: green;
  }
`

export const Info = styled.span`
  font-weight: 900;
`

export const Author = styled.span`
  padding-top: 4.5rem;
`

export const StatusIndicator = styled.span`
  height: 18px;
  width: 18px;
  display: inline-block;
  border-radius: 50%;
  margin-left: 10px;
  background-color: ${({ status }) => {
    if (status === 'Alive') {
      return 'green'
    } else if (status === 'Dead') {
      return 'red'
    } else {
      return 'grey'
    }
  }};
`

export const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    position: relative;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.footerColor};
    padding: 4.5rem 0px;
    min-height: calc(120px);
    width: 100%;
`

export const PaginationControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  button {
    margin-left: 10px;
    margin-right: 10px;
    padding: 10px 25px;
    border-radius: 5px;
    outline: none;
    font-weight: 600;
    background-color: #595a59;
    color: ${({ theme }) => theme.footerButton};
  }

  button:disabled {
    color: grey;
    background-color: grey;
  }
`

export const PageNumberInput = styled.input`
    width: 60px;
    padding: 10px;
    margin-left: 10px;

`

export const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.6rem;
  position: absolute;
  top: 7px;
  right: 1em;
  z-index: 100;
  outline: none;
`

export const Icon = styled.span`
  font-size: 24px;
  color: #587b58;
`