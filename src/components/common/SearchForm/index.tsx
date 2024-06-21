import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";

// Components
import { SearchIcon } from "../Icons";

// Constants
import { SEARCH_INPUT_PLACEHOLDER } from "@/constants";

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

  return (
    <InputGroup as="form" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="searchValue"
        control={control}
        render={({ field }) => (
          <Input {...field} h={9.25} placeholder={SEARCH_INPUT_PLACEHOLDER} />
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
