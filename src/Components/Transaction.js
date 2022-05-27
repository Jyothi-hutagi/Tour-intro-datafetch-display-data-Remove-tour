import React ,{useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'
import Transaction1 from './Transaction1'
const Transaction = () => {
    const {transactions} = useContext(GlobalContext)
  return (
    <>
    <h3>History</h3>
    <ul className='list'>
        {transactions.map(transaction =>( <Transaction1 key={transaction.id} transaction= {transaction}/>))}
    </ul>
    
    
    </>
  )
}

export default Transaction