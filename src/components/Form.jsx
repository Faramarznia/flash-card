import { useState } from "react";
import FlashCard from "./FlashCard";

function Form({ setFlashCard }) {
  const [inputEnglish, setInputEnglish] = useState("");
  const [inputPersian, setInputPersian] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    FlashCard.word = inputEnglish;
    setFlashCard({ ...FlashCard });
    FlashCard.persianEquivalent = inputPersian;
    setFlashCard({ ...FlashCard });

    setInputEnglish("");
    setInputPersian("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="word-input"
        placeholder="کلمه"
        value={inputEnglish}
        onChange={(e) => setInputEnglish(e.target.value)}
      />
      <input
        id="persian-equivalent-input"
        placeholder="معادل فارسی"
        value={inputPersian}
        onChange={(e) => setInputPersian(e.target.value)}
      />
      <button id="submit-btn">ثبت</button>
    </form>
  );
}

export default Form;
