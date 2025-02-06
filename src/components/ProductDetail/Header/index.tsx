export default function YouMightLikeSection() {
  const alsoLikeItems = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="pt-12 pb-7 flex flex-col gap-4">
      <div className="font-bold md:text-lg">You might also like</div>
      <div className="flex items-start gap-0.5 xl:items-center xl:justify-between">
        {alsoLikeItems.map((item, index) => {
          return (
            <div
              key={index}
              className="size-[50px] md:size-[90px] lg:size-[120px] xl:size-[150px] bg-stone-400 rounded-md"
            ></div>
          );
        })}
      </div>
    </div>
  );
}
