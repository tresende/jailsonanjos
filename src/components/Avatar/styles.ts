import styled from 'styled-components'

export const AvatarContainer = styled.div`
  border-radius: 50%;
  border: solid 2px #00818a;
  display: flex;
  overflow: hidden;
  justify-content: center;
  width: fit-content;
  margin-bottom: 2rem;
  background-color: ${(props) => props.theme['gray-300']};
`

export const AvatarViewContaiber = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const AvatarContainerSmall = styled.div`
  border-radius: 50%;
  border: solid 2px #00818a;
  display: flex;
  overflow: hidden;
  justify-content: center;
  width: fit-content;
  margin-bottom: 2rem;
  background-color: ${(props) => props.theme['gray-300']};
`
export const AvatarSmall = styled.img`
  height: 50px;
  width: 50px;
`
export const AvatarLarge = styled.img`
  height: 200px;
  width: 200px;
`
