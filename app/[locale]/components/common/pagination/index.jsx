import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import "./style.scss";
const Pagination = () => {
  return (
    <div className='r-pagination'>
      <button className='pagination-btn'>
        <FaChevronLeft />
      </button>
      <button className='pagination-btn'>
        <FaChevronRight />
      </button>
    </div>
  );
};

export const BottomPagination = ({ pagination, onPageChange, rotate, label = true, classes = "mt-2" }) => {

  return (
    <div className={`b-pagination gap-2 ${classes}`}>
      <button
        disabled={pagination.page <= 0}
        className={`pagination-btn`}
        onClick={() => onPageChange(pagination?.page - 1)}
      >
        <FaChevronLeft className='left-icon' />
      </button>
      {label &&
        <span className='pagination-text'>
          <span className='pagination-text !text-[#575757] !opacity-100'>{pagination.page + 1}</span>
          &nbsp; / &nbsp;
          <span className='pagination-text'>{pagination?.total + 1}</span>
        </span>
      }
      <button
        disabled={pagination?.page >= pagination.total}
        className={`pagination-btn`}
        onClick={() => onPageChange(pagination?.page + 1)}
        dir='ltr'
      >
        <FaChevronRight className='right-icon' />
      </button>
    </div>
  );
};

export default Pagination;
