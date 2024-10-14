export type TInputProps = {
  name: string;
  placeholder: string;
  label: string;
  type: string;
  id: string;
  value: string;
  onChange: React.ChangeEventHandler;
  error?: string;
};
