type OrderByGradeButtonProps = {
  onSort: () => void;
};

function OrderByGradeButton({ onSort }: OrderByGradeButtonProps) {
  return (
    <button className="sort-button" onClick={onSort}>
      Sortera efter betyg
    </button>
  );
}

export default OrderByGradeButton;