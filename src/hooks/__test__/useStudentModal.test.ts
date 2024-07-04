import { useStudentModal } from "@/hooks/useStudentModal";
import { renderHook } from "@testing-library/react";
import { act } from "react";

// Constants
import { DEFAULT_STUDENT_DATA } from "@/constants";

// Mock
import { MOCK_STUDENTS } from "@/mock";

describe("useStudentModal", () => {
  test("should initialize with default student data", () => {
    const { result } = renderHook(() => useStudentModal());

    expect(result.current.student).toEqual(DEFAULT_STUDENT_DATA);
  });

  test("should update student data", () => {
    const { result } = renderHook(() => useStudentModal());

    const newStudentData = MOCK_STUDENTS[0];

    act(() => {
      result.current.setStudent(newStudentData);
    });

    expect(result.current.student).toEqual(newStudentData);
  });

  test("should update student ID", () => {
    const { result } = renderHook(() => useStudentModal());

    const newStudentId = "123";

    act(() => {
      result.current.setStudentId(newStudentId);
    });

    expect(result.current.studentId).toEqual(newStudentId);
  });
});
