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
  it("should render correctly", () => {
    const { container } = render(<UserCard {...mockUserCardProps} />);
    expect(container).toMatchSnapshot();
  });

  it("should render with default avatar URL", () => {
    render(
      <UserCard name={mockUserCardProps.name} role={mockUserCardProps.role} />,
    );

    const avatarElement = screen.getByRole<HTMLImageElement>("img");

    const hasDefaultAvatarUrl = avatarElement.src.includes(DEFAULT_AVATAR_URL);

    expect(hasDefaultAvatarUrl).toEqual(true);
  });
});
