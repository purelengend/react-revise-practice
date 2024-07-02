import { renderHook, waitFor } from "@testing-library/react";

// Hooks
import {
  useDeleteStudent,
  useGetStudentCount,
  useGetStudents,
  useMutateStudent,
} from "../useStudent";

// Utils
import { AllTheProviders } from "@/utils";

// Mock
import { MOCK_STUDENTS } from "@/mock";

// Services
import {
  createOrUpdateStudent,
  deleteStudentById,
  getAllStudents,
  getTotalStudents,
} from "@/services";
import { act } from "react";

jest.mock("@/services", () => ({
  getTotalStudents: jest.fn(),
  getAllStudents: jest.fn(),
  createOrUpdateStudent: jest.fn(),
  deleteStudentById: jest.fn(),
}));

describe("useStudent test cases", () => {
  it("should fetch total students number", async () => {
    const mockResponse = 6;

    (getTotalStudents as jest.Mock).mockResolvedValue(mockResponse);

    const { result } = renderHook(() => useGetStudentCount(""), {
      wrapper: AllTheProviders,
    });

    await waitFor(() => {
      expect(result.current.data).toBe(mockResponse);
    });
  });

  it("should fetch all students", async () => {
    (getAllStudents as jest.Mock).mockResolvedValue(MOCK_STUDENTS);

    const { result } = renderHook(
      () =>
        useGetStudents({ page: 1, limit: 6, name: "", sortBy: "", order: "" }),
      {
        wrapper: AllTheProviders,
      },
    );

    await waitFor(() => {
      expect(result.current.data).toBe(MOCK_STUDENTS);
    });
  });

  it("should mutate a student", async () => {
    (createOrUpdateStudent as jest.Mock).mockResolvedValue(MOCK_STUDENTS[0]);

    const { result } = renderHook(() => useMutateStudent(), {
      wrapper: AllTheProviders,
    });

    act(() => {
      result.current.mutate(MOCK_STUDENTS[0]);
    });

    await waitFor(() => {
      expect(result.current.data).toBe(MOCK_STUDENTS[0]);
    });
  });

  it("should delete a student", async () => {
    (deleteStudentById as jest.Mock).mockResolvedValue(MOCK_STUDENTS[0]);

    const { result } = renderHook(() => useDeleteStudent(), {
      wrapper: AllTheProviders,
    });

    act(() => {
      result.current.mutate(MOCK_STUDENTS[0].id);
    });

    await waitFor(() => {
      expect(result.current.data).toBe(MOCK_STUDENTS[0]);
    });
  });
});
