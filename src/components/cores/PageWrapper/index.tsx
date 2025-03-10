export default function PageWrapper({
  children,
  noPadding = false,
}: {
  children: React.ReactNode;
  noPadding?: boolean;
}) {
  return (
    <div className={noPadding ? "" : "pt-14 lg:pt-28 font-worksans"}>
      {children}
    </div>
  );
}
