import styled from "styled-components";

const Embla = styled.div`
  position: relative;
  width: 100%;
  padding: 0 200px;

  @media(max-width: 1920px) {
    padding: 0 140px;
  }
  @media(max-width: 1440px){
    padding: 0 60px;
  }
  @media(max-width: 1024px) {
    
  }
`

const EmblaViewport = styled.div`
  overflow: hidden;
  width: 100%;
  .is-draggable {
    cursor: move;
    cursor: grab;
  }
  .is-dragging {
    cursor: grabbing;
  }
`

const EmblaContainer = styled.div`
  display: flex;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -webkit-tap-highlight-color: transparent;
  width: 100%;
  align-items: flex-end;
`

const EmblaSlide = styled.div`
  position: relative;
  margin: 0 40px;
`

const EmblaSlideInner = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
`

export {
  Embla,
  EmblaViewport,
  EmblaContainer,
  EmblaSlide,
  EmblaSlideInner
}