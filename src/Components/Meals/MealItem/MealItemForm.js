import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = ({ onAddToCart }) => {
  const [isValid, setIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setIsValid(false);
      return;
    }

    
    onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={(e)=>submitHandler(e)}>
      <Input
        ref={amountInputRef}
        label="amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isValid && <p>please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
