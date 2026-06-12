type OrderByAlphaButtonProps = {
  onSort: () => void;
};

function OrderByAlphaButton({ onSort }: OrderByAlphaButtonProps) {
  return (
    <button className="sort-button" onClick={onSort}>
      Sortera alfabetiskt
    </button>
  );
}

export default OrderByAlphaButton;