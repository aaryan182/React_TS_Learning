type HorizontalPosition = "left" | "right" | "center";
type VerticalPostion = "top" | "bottom" | "center";

type ToastProps = {
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPostion}`, "center-center">
    | "center";
};

export const Toast = ({ position }: ToastProps) => {
  return <div>Toast Notification Positon - {position}</div>;
};
