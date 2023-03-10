import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {


    const saveExpenseDataHandler = (expense) => {
        const expenseData = {
            ...expense,
            id: Math.random().toString()
        }


        props.onAddExpenseHandler(expenseData)


    }

    return <div className={"new-expense"}>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
}

export default NewExpense