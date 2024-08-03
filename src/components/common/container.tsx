export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="md:w-[55%] w-[100%] mt-12">{children}</div>;
}
