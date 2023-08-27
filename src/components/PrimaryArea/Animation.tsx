import { useGlobalContext } from "../../context";
import { useAppDispatch } from "../../hooks";
import { setKeyframes } from "../../reducers/animatedObjectReducer";

type Props = {
  index: number;
  itemId: string;
  animationTitle: string;
  dragging: boolean;
  firstVariationTitle: string;
  variationKeyframes: string;
};

const Animation = ({
  index,
  itemId,
  animationTitle,
  dragging,
  firstVariationTitle,
  variationKeyframes,
}: Props) => {
  const { selectedGroup, setSelectedGroup, setSelectedVariation } =
    useGlobalContext();

  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (dragging) {
      return false;
    }
    setSelectedGroup({ index: index, animationTitle: animationTitle });
    setSelectedVariation(firstVariationTitle);
    dispatch(setKeyframes(variationKeyframes));
  };

  return (
    <div
      key={itemId}
      className={`mx-2 flex min-w-[90px] cursor-pointer  select-none items-center  justify-center whitespace-nowrap rounded-full px-2 py-1 text-center text-sm md:h-28 md:w-28  ${
        selectedGroup.animationTitle === animationTitle
          ? "bg-accent"
          : "bg-primary"
      }`}
      onClick={handleClick}
    >
      <div>{animationTitle}</div>
    </div>
  );
};

export default Animation;
