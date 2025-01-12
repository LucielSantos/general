interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ value, onChange }: Props) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="border border-gray-300 p-2 mr-2 rounded-md ml-2"
    />
  );
};
