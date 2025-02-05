export default function ShopByPriceSection() {
  const priceCategory = [10, 20, 50, 100];
  return (
    <div className="container mx-auto pt-7">
      <span className="font-bold text-2xl md:text-3xl px-7 md:px-14 lg:px-0">
        Shop by price
      </span>
      <div className="grid grid-cols-12 gap-3 md:gap-6 py-7 content-center px-7 md:px-14 lg:px-0">
        {priceCategory.map((item, index) => {
          return (
            <div
              key={index}
              className="col-span-12 md:col-span-6 lg:col-span-3 h-32 md:h-36 w-full md:w-80 bg-gradient-to-t from-zinc-100 to-indigo-100 flex items-center justify-center gap-1 rounded-sm text-2xl hover:cursor-pointer hover:bg-none hover:bg-stone-100 hover:bg-opacity-80"
            >
              <span className="font-medium">Under</span>{" "}
              <span className="font-bold">${item}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
