import { AiOutlineMobile } from 'react-icons/ai';
import { MdOutlineComputer } from 'react-icons/md';
import { NumericFormat } from 'react-number-format';
const TopupCategory = () => {
  return (
    <div className='stats mb-7 bg-white shadow'>
      <div className='stat'>
        <div className='text-primary stat-figure'>
          <AiOutlineMobile size={60} />
        </div>
        <div className='stat-title'>Mobile Game</div>
        <div className='text-primary stat-value'>
          <NumericFormat
            displayType='text'
            value={500000}
            prefix='Rp. '
            thousandSeparator='.'
            decimalSeparator=','
          />
        </div>
        <div className='stat-desc'>21% more than last month</div>
      </div>
      <div className='stat'>
        <div className='stat-figure text-secondary'>
          <MdOutlineComputer size={60} />
        </div>
        <div className='stat-title'>PC Game</div>
        <div className='stat-value text-secondary'>
          <NumericFormat
            displayType='text'
            value={500000}
            prefix='Rp. '
            thousandSeparator='.'
            decimalSeparator=','
          />
        </div>
        <div className='stat-desc'>21% more than last month</div>
      </div>
    </div>
  );
};

export default TopupCategory;
