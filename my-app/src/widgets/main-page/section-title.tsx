export const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h1 className="text-[1rem] lg:text-[2rem] text-center font-bold bg-gradient-to-t from-[#07437A] to-[#529bdf] bg-clip-text text-transparent">
      {title}
    </h1>
  );
};
