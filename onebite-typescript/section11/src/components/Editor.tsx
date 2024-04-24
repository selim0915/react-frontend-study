import React, { useRef, useState } from 'react';

interface Props {
  onClickAdd: (text: string) => void;
}

export default function Editor(props: Props) {
  const [text, setText] = useState("");

  const onChageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const onClickButton = () => {
    props.onClickAdd(text);
    setText("");
  }

  return (
    <div>
      <input value={text} onChange={onChageInput} />
      <button onClick={onClickButton}>add</button>
    </div>
  );
}