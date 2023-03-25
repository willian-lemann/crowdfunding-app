type CustomButtonProps = {
  type: any;
  title: string;
  handleClick?(): void;
  styles: string;
};

export function CustomButton({
  type,
  title,
  handleClick,
  styles,
}: CustomButtonProps) {
  return (
    <button
      type={type}
      className={`font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] ${styles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}
