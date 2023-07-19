//on convert time to miliscende
const convertToMilliscond = (timeValue: string): number | undefined => {
  // on recup le number depuis timeValue
  const number = Number(timeValue.match(/\d+/g)?.join(""));
  //on recup le string depuis timeValue
  const str = timeValue.replace(number.toString(), "").toLowerCase();

  switch (str) {
    case "j":
      return number * 24 * 60 * 60 * 1000;
    case "h":
      return number * 60 * 60 * 1000;
    case "s":
      return number * 1000;
    case "an" || "ans":
      return number * 365 * 24 * 60 * 60 * 1000;
    default:
      return undefined;
  }
};

export default convertToMilliscond;
