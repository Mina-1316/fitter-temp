export interface TextProps {
  children: string;
}

export default (rawProps: TextProps) => {
  const props = {
    ...rawProps,
  };

  return (
    <div>
      <p>{props.children}</p>
    </div>
  );
};
