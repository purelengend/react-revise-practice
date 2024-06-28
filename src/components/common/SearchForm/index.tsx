import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import { useCallback, useEffect, useState } from "react";

// Components
import { SearchIcon } from "../Icons";

// Constants
import { SEARCH_INPUT_PLACEHOLDER } from "@/constants";

// Hooks
import { useDebounce } from "@/hooks/useDebounce";

export type SearchFormProps = {
  onSubmit: (args: SearchFormInput) => void;
};

export type SearchFormInput = {
  searchValue: string;
};
const SearchForm = ({ onSubmit }: SearchFormProps) => {
  const { control, handleSubmit } = useForm<SearchFormInput>({
    defaultValues: {
      searchValue: "",
    },
  });

  const [searchText, setSearchText] = useState("");

  const debouncedText = useDebounce(searchText.replace(/\s+/g, " ").trim()); // remove extra spaces of the search text

  const handleOnchange = useCallback(
    (
      event: React.ChangeEvent<HTMLInputElement>,
      onChange: (...event: unknown[]) => void,
    ) => {
      onChange(event);
      setSearchText(event.target.value);
    },
    [],
  );

  // Submit form when debouncedText changes
  useEffect(() => {
    handleSubmit(onSubmit)();
  }, [debouncedText, handleSubmit, onSubmit]);

  const checkKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Enter") event.preventDefault();
    },
    [],
  );

  return (
    <InputGroup
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      onKeyDown={checkKeyDown}
    >
      <Controller
        name="searchValue"
        control={control}
        render={({ field: { onChange, ...rest } }) => (
          <Input
            {...rest}
            h={9.25}
            placeholder={SEARCH_INPUT_PLACEHOLDER}
            color="black"
            onChange={(event) => handleOnchange(event, onChange)}
          />
        )}
      />
      <InputRightElement>
        <IconButton
          as="button"
          type="submit"
          aria-label="Search student"
          _hover={{
            bg: "none",
          }}
          icon={<SearchIcon />}
        />
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchForm;
