onclick 를 사용할 떄는 아래 세가지 onkey\* 핸들러를 같이 사용하면 된다.

onKeyDown, onKeyUp, onKeyPress

<div onclick={fn} onKeyDown={handleKeyDown}></div>
<div onclick={fn} onKeyUp={handleKeyUp}></div>
