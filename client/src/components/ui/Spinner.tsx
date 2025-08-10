import { ImSpinner9 } from "react-icons/im";

export const Spinner = ({ size = 10 }: { size?: number }) => {
  return (
    <div
      className={`relative flex h-full w-full flex-col items-center justify-center `}
    >
      <ImSpinner9
        color="#FFD700"
        className=" animate-spin-z"
        size={size}
      />
    </div>
  );
};
