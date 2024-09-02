type IProps = { color?: string; width?: string; height?: string };
const Arrow = ({
  color = "#525252",
  width = "0.6em",
  height = "0.6m",
}: IProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 43 23" fill="none">
      <path
        d="M2.638.287L0 3.302 20.098 21.39l1.319 1.193 1.319-1.193L42.833 3.302 40.196.287l-18.78 16.895L2.639.287z"
        fill={color}
      />
    </svg>
  );
};

export default Arrow;
