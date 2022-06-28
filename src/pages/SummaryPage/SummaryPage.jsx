import React, { useState } from 'react'

function SummaryPage() {
  const [ checked, setChecked ] = useState(false);

  const onChangeHandler = e => {
    setChecked(e.taget.checked);
  }

  return (
    <div>
      <form>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChangeHandler}
          id="confirm-checkbox"
        />
        <label htmlFor="confirm-checkbox">주문하려는 것을 확인하셨나요?</label>
        <br />
        <button disabled={!checked} type="submit">
          주문 확인
        </button>
      </form>
    </div>
  )
}

export default SummaryPage
