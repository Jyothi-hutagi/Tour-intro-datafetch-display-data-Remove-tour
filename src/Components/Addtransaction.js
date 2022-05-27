import {useState,useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'

const Addtransaction = () => {
    const [text,Settext] = useState('');
    const[amount,Setamount]= useState(0);
    const {addTransaction} = useContext(GlobalContext)

    const onSubmit = (e) =>{
        e.preventDefault();
        const newTransaction={
            id: Math.floor(Math.random()*100000000),
            text,
            amount:+ amount
}
        addTransaction(newTransaction);
        Settext('');
        Setamount('');
    }
  return (
    <>
    <h3>Add new Transaction</h3>
    <form onSubmit={onSubmit}>
        <div className='control'>
            <label htmlFor='text'>Text</label>
            <input type= 'text' value={text} placeholder='Enter Text...' onChange={(e)=> Settext(e.target.value)}/>
        </div>
        <div className='control'>
            <label htmlFor='amount'>Amount <br/> (negative-expense,positive - income)</label>
            <input type='Number' value={amount} placeholder='Enter amountr'onChange={(e)=> Setamount(e.target.value)}/>
        </div>
        <button className='btn'>Add Transaction</button>
    </form>
    </>
  )
}

export default Addtransaction