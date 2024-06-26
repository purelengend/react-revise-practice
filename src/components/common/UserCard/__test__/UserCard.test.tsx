import { render, screen } from "@testing-library/react";
import UserCard, { UserCardProps } from "..";

// Constants
import { DEFAULT_AVATAR_URL, ROLES } from "@/constants";

describe("UserCard test cases", () => {
  const mockUserCardProps: UserCardProps = {
    name: "test name",
    role: ROLES.ADMIN,
    avatarUrl: "test avatarUrl",
  };

  const mockUserCardPropsWithoutAvatarUrl: UserCardProps = {
    name: "test name",
    role: ROLES.ADMIN,
    avatarUrl: undefined,
  };

  const setup = (prop: UserCardProps) => {
    return render(<UserCard {...prop} />);
  };
  it("should render correctly", () => {
    const { container } = setup(mockUserCardProps);

    expect(container).toMatchSnapshot();
  });

  it("should render with default avatar URL", () => {
    setup(mockUserCardPropsWithoutAvatarUrl);

    const avatarElement = screen.getByRole<HTMLImageElement>("img");

    const hasDefaultAvatarUrl = avatarElement.src.includes(DEFAULT_AVATAR_URL);

    expect(hasDefaultAvatarUrl).toEqual(true);
  });
});
