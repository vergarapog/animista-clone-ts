import { useGlobalContext } from "../../context";

type Props = {
  variationTitle: string;
};

const AnimationVariation = ({ variationTitle }: Props) => {
  const { selectedVariation, setSelectedVariation } = useGlobalContext();

  const handleClick = () => {
    setSelectedVariation(variationTitle);
  };

  return (
    <div
      className={`cursor-pointer select-none whitespace-nowrap rounded p-1 text-center  text-sm text-primarydark  hover:text-accent md:p-2 md:text-sm ${
        selectedVariation === variationTitle
          ? "bg-accent text-white hover:text-gray-50"
          : ""
      }`}
      onClick={handleClick}
    >
      <div>{variationTitle}</div>
    </div>
  );
};

export default AnimationVariation;
