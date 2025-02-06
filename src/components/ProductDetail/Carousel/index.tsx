import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import Image from "next/image";

export default function ProductDetailCarousel({
  images,
  brand,
}: {
  images: string[];
  brand: string;
}) {
  const items = [1, 2, 3, 4];
  return (
    <div className="pt-1 block md:hidden">
      <Carousel>
        <CarouselContent>
          {images.map((item, index) => {
            return (
              <CarouselItem key={index}>
                <div className="w-full h-[375px] bg-zinc-100 relative">
                  <Image
                    src={item}
                    alt={`${brand}`}
                    fill
                    sizes="fill"
                    quality={100}
                  />
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
