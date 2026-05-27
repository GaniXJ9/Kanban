export const importanceColor = (importance: string | null) => {
  switch (importance) {
    case "Optionaly":
      return "bg-[#00ffbc]";
    case "Not urgent, but necessary":
      return "bg-[#ead159]";
    case "Important":
      return "bg-[#f44927]";
    case "High Priorety":
      return "bg-[#7d1999]";
    default:
      return "bg-[#c5c5c5]";
  }
};
