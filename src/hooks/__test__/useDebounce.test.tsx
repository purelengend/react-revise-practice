import { renderHook, act } from "@testing-library/react";
import { useDebounce } from "../useDebounce";

describe("useDebounce", () => {
  test("should return the debounced value after the specified delay", async () => {
    jest.useFakeTimers();

    const { result, rerender } = renderHook((value: string, delay?: number) =>
      useDebounce(value, delay),
    );

    act(() => {
      rerender("initial value");
    });

    expect(result.current).toEqual(undefined);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(result.current).toBe("initial value");
  });
});
