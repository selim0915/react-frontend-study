import React, { useState } from 'react';
import { useTodoDispatch } from '../App';

interface Props { }

export default function Editor(props: Props) {
  const dispatch = useTodoDispatch();
  const [text, setText] = useState("");

  const onChageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const onClickButton = () => {
    dispatch.onClickAdd(text);
    setText("");
  }

  return (
    <div>
      <input value={text} onChange={onChageInput} />
      <button onClick={onClickButton}>add</button>
    </div>
  );
}