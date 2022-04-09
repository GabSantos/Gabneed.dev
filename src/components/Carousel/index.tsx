import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "../CarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { ProjectsProps } from "../../pages";
import { Embla, EmblaContainer, EmblaSlide, EmblaSlideInner, EmblaViewport } from "./styles";
import Phone from "../Phone";
import ProjectName from "../ProjectName";
import Notebook from "../Notebook";

type SlidesProps = {
  slides: ProjectsProps[];
  platform: string;
}


const EmblaCarousel = ( { slides, platform }: SlidesProps) => {
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  }, []);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [currentPhone, setCurrentPhone] = useState(0);

  const handleRedirect = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if(newWindow){
      newWindow.opener = null;
    }
  }


  const scrollPrev = useCallback(() => {
    if(embla) embla.scrollPrev()
  }, [embla]);
  const scrollNext = useCallback(() => {
    if(embla) embla.scrollNext()

  }, [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
    setCurrentPhone(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <>
      <ProjectName name={slides[currentPhone].name}/>
      <Embla className="embla" >
        <EmblaViewport className="embla__viewport" ref={viewportRef}>
          <EmblaContainer className="embla__container">
            {slides.map((value, index) => {
              return (
              <EmblaSlide  className="embla__slide" key={index}>
                {platform === 'Phone' ? (
                  <Phone 
                    active={currentPhone === index}
                    src={value.image_url}
                    onClick={() => handleRedirect(value.redirect)}
                  />
                ) : (
                  <Notebook 
                    active={currentPhone === index}
                    src={value.image_url}
                  />
                )}
              </EmblaSlide>
            )})}
          </EmblaContainer>
        </EmblaViewport>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </Embla>
    </>
  );
};

export default EmblaCarousel;
