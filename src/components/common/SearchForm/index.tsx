import {
  Box,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import { memo, useCallback, useEffect, useState } from "react";

// Components
import { SearchIcon } from "../Icons";

// Constants
import { SEARCH_INPUT_PLACEHOLDER } from "@/constants";

// Hooks
import { useDebounce } from "@/hooks";
import { CloseIcon } from "@chakra-ui/icons";

export type SearchFormProps = {
  onSubmit: (args: SearchFormInput) => void;
  searchParam: string;
};

export type SearchFormInput = {
  searchValue: string;
};

const SearchForm = memo(({ onSubmit, searchParam }: SearchFormProps) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isDirty },
  } = useForm<SearchFormInput>({
    defaultValues: {
      searchValue: "",
    },
  });

  const [searchText, setSearchText] = useState("");

  const debouncedText = useDebounce(searchText.replace(/\s+/g, " ").trim()); // remove extra spaces of the search text

  // Submit search on debounced text change
  useEffect(() => {
    if (searchParam !== debouncedText) handleSubmit(onSubmit)();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedText, searchParam]);

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

  const checkKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Enter") event.preventDefault();
    },
    [],
  );

  const resetSearchForm = useCallback(() => {
    reset();
    setSearchText("");
  }, [reset]);

  return (
    <InputGroup
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      onKeyDown={checkKeyDown}
      id="search-form"
      display="block"
    >
      <Controller
        name="searchValue"
        control={control}
        render={({ field: { onChange, ...rest } }) => (
          <Box position="relative">
            <Input
              {...rest}
              h={9.25}
              placeholder={SEARCH_INPUT_PLACEHOLDER}
              color="black"
              onChange={(event) => handleOnchange(event, onChange)}
            />
            {isDirty && (
              <IconButton
                as="button"
                type="button"
                aria-label="Reset search"
                borderRadius="50%"
                size="sm"
                pos="absolute"
                right={10}
                bottom={1}
                zIndex={99}
                onClick={resetSearchForm}
                icon={<CloseIcon boxSize={2} />}
              />
            )}
          </Box>
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
});

export default SearchForm;
