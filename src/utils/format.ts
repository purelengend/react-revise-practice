import { ChangeEvent, KeyboardEvent } from "react";

export const formatPhoneNumber =
  (onChange: (value: string) => void) =>
  (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let input = e.target.value;

    if (input.length > 3 && input[3] !== "-") {
      input = input.slice(0, 3) + "-" + input.slice(3);
    }
    if (input.length > 7 && input[7] !== "-") {
      input = input.slice(0, 7) + "-" + input.slice(7);
    }

    onChange(input);
  };

export const onlyNumberKeyDown = (
  e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
) =>
  !/[0-9]/.test(e.key) &&
  !(e.key === "Backspace" || e.key === "Delete" || e.key === "Tab") &&
  e.preventDefault();
