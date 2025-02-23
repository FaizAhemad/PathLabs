import AntdButton, {ButtonProps} from "antd/es/button";
import "antd/es/button/style";

interface Props extends ButtonProps {
  label?: string;
}

export default function Button({
  label = "",
  size = "small",
  variant = "outlined",
  iconPosition = "end",
  autoCapitalize = "words",
  shape = "default",
  loading = false,
  type = "primary",
  children,
  ...restProps
}: Props) {
  return (
    <AntdButton
      type={type}
      iconPosition={iconPosition}
      shape={shape}
      variant={variant}
      size={size}
      autoCapitalize={autoCapitalize}
      loading={loading}
      {...restProps}
    >
      {children || label}
    </AntdButton>
  );
}
