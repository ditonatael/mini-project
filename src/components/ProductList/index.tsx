export default function ProductList() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="container mx-auto py-7">
      <div className="text-3xl font-bold">Find your best style</div>
      <div className="w-full mx-[10px] grid grid-cols-12 gap-y-4">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className="col-span-3 w-[310px] h-[380px] bg-stone-400 flex flex-col"
            >
              <div className="w-full h-5/6 bg-zinc-100"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
