import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function ProductDetailCarousel() {
  const items = [1, 2, 3, 4];
  return (
    <div className="block md:hidden">
      <Carousel>
        <CarouselContent>
          {items.map((item, index) => {
            return (
              <CarouselItem key={index}>
                <div className="w-full h-[375px] bg-green-200">
                  Content {item}
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
