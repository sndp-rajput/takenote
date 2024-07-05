const Textellipsis = ({ children, className }) => {
  return (
    <span
      className={`whitespace-nowrap overflow-hidden text-ellipsis text-start ${className}`}
    >
      {children}
    </span>
  );
};

export default Textellipsis;
