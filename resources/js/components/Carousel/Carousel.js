import React from 'react'
import './style.scss'
import { AiFillAlert } from "react-icons/ai";
 
const items = [
  {
    src: 'https://picsum.photos/id/123/1200/400',
    altText: 'Slide 1',
    caption: 'Slide 1',
    key: 1,
  },
  {
    src: 'https://picsum.photos/id/456/1200/400',
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 2,
  },
  {
    src: 'https://picsum.photos/id/678/1200/400',
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 3,
  },
];
const Carousel = () => {
  const displayBook = [
    items.slice(0, 4),
    items.slice(4, 8),
    items.slice(8, 10)
]

const next = () => {
    const nextIndex = (index === 3 - 1 ? index : index + 1);
    setIndex(nextIndex);
};

const previous = () => {
    const prevIndex = (index === 0 ? 0 : index - 1);
    setIndex(prevIndex);
};

const slides = displayBook[index].map((book, index) => {
    return (
        <CarouselItem key={index}>
            <CardBook detailBook={book}/>
        </CarouselItem>
    );
});
  return (
    <Carousel next={next} previous={previous} dark interval={false}>
                {slides}
                <CarouselControl direction="prev" onClickHandler={previous} />
                <CarouselControl direction="next" onClickHandler={next} />
            </Carousel>
  )
}
export default Carousel;
