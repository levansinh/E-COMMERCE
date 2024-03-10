import { Tooltip, TooltipProps } from '@nextui-org/react';

interface ITooltipCustom extends TooltipProps {
  children: JSX.Element;
}

export default function TooltipCustom({ children, color = 'default', ...passProps }: ITooltipCustom) {
  return (
    <Tooltip closeDelay={0} color={color} {...passProps} showArrow>
      {children}
    </Tooltip>
  );
}
