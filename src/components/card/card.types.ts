export type CardComponentProps = React.PropsWithChildren & {
  //   startAdornmentComponent: JSX.Element;
  isSelected: boolean;
  externalStylesClass?: string;
  onClick?: (id?: number) => void;
};
