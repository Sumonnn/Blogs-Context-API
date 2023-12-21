import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {

  const { pageCount, handlerPageChange, totalPages } = useContext(AppContext);

  return (
    <div>
      <div>
        {
          pageCount > 1 &&
          <button onClick={() => handlerPageChange(pageCount - 1)}>
            Previous
          </button>
        }
        {
          pageCount < totalPages &&
          < button onClick={() => handlerPageChange(pageCount + 1)}>
            Next
          </button>
        }
        <p>
          Page {pageCount} of {totalPages}
        </p>
      </div>
    </div >
  )
}

export default Pagination