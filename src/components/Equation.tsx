type Props = {
  type: string;
  attribute: string;
  isCardOpen: boolean;
};

function Equation(props: Props) {
  return (
    <div className="flex flex-row justify-between uppercase">
      <div
        className="flex-1 text-left pr-2"
        style={{
          fontSize: props.isCardOpen ? '1.125rem' : undefined,
          lineHeight: props.isCardOpen ? '1.125rem' : undefined,
        }}
      >
        {props.type}
      </div>
      <div className="flex-none px-2">=</div>
      <div
        className="flex-1 text-right pl-2"
        style={{
          fontSize: props.isCardOpen ? '1.125rem' : undefined,
          lineHeight: props.isCardOpen ? '1.125rem' : undefined,
        }}
      >
        {props.attribute}
      </div>
    </div>
  );
}

export default Equation;
