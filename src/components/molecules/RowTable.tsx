import { MdOutlinePendingActions } from 'react-icons/md';
import { NumericFormat } from 'react-number-format';

const RowTable = () => {
  return (
    <tr className='h-20 text-gray-600'>
      <td className='... border border-slate-300'>
        <div className='flex justify-center gap-3 align-middle'>
          Clash of Clans
        </div>
      </td>
      <td className='... border border-slate-300'>
        <div className='flex justify-center gap-3'>Gold 250</div>
      </td>
      <td className='... border border-slate-300'>
        <div className='flex justify-center gap-3 align-middle'>
          <NumericFormat
            displayType='text'
            value={500000}
            prefix='Rp. '
            thousandSeparator='.'
            decimalSeparator=','
          />
        </div>
      </td>

      <td className='... border border-slate-300'>
        <div className='flex justify-center gap-3 align-middle'>
          <MdOutlinePendingActions size={50} />
          Pending
        </div>
      </td>
    </tr>
  );
};

export default RowTable;
