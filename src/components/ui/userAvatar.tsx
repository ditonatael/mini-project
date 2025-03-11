export default function UserAvatar({
  name,
  className,
}: {
  name: string;
  className: string;
}) {
  return (
    <div
      className={`size-10 bg-stone-200 rounded-full flex items-center justify-center text-sm font-bold ${className}`}
    >
      {" "}
      {name.charAt(0)}
    </div>
  );
}
