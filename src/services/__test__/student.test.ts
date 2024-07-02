import {
  createOrUpdateStudent,
  deleteStudentById,
  getAllStudents,
  getStudentById,
  getTotalStudents,
  studentHttp,
} from "../students";

// Types
import { QueryParams } from "@/types";

// Mock
import { MOCK_STUDENTS } from "@/mock";
describe("student service test cases", () => {
  const mockStudents = {
    data: MOCK_STUDENTS,
  };

  const mockStudent = {
    data: mockStudents.data[0],
  };

  const httpGet = jest.spyOn(studentHttp, "get") as jest.Mock;
  const httpPost = jest.spyOn(studentHttp, "post") as jest.Mock;
  const httpPut = jest.spyOn(studentHttp, "put") as jest.Mock;
  const httpDelete = jest.spyOn(studentHttp, "delete") as jest.Mock;

  it("should fetch all students", async () => {
    httpGet.mockResolvedValueOnce(mockStudents);

    const mockParams: QueryParams = {
      page: 1,
      limit: 10,
      sortBy: "name",
      order: "asc",
      name: "John",
    };

    let students = await getAllStudents(mockParams);

    expect(mockStudents.data).toEqual(students);

    httpGet.mockResolvedValueOnce(mockStudents);

    const mockParamsWithoutName: QueryParams = { ...mockParams, name: "" };

    students = await getAllStudents(mockParamsWithoutName);

    expect(mockStudents.data).toEqual(students);
  });

  it("should fetch total number of students", async () => {
    httpGet.mockResolvedValueOnce(mockStudents);

    const mockParams = { name: "John" };

    let studentCount = await getTotalStudents(mockParams.name);

    expect(mockStudents.data.length).toEqual(studentCount);

    httpGet.mockResolvedValueOnce(mockStudents);

    studentCount = await getTotalStudents("");

    expect(mockStudents.data.length).toEqual(studentCount);
  });

  it("should return 0 when fetching total number of students fails", async () => {
    httpGet.mockRejectedValueOnce(0);

    const studentCount = await getTotalStudents("");

    expect(studentCount).toBe(0);
  });

  it("should fetch a student by ID", async () => {
    httpGet.mockResolvedValueOnce(mockStudent);

    const student = await getStudentById(mockStudent.data.id);

    expect(student).toEqual(mockStudent.data);
  });

  it("should create a new student", async () => {
    httpPost.mockResolvedValueOnce(mockStudent);

    const mockStudentWithouId = { ...mockStudent.data, id: "" };

    const student = await createOrUpdateStudent(mockStudentWithouId);

    expect(student).toEqual(mockStudent.data);
  });

  it("should update an existing student", async () => {
    httpPut.mockResolvedValueOnce(mockStudent);

    const student = await createOrUpdateStudent(mockStudent.data);

    expect(student).toEqual(mockStudent.data);
  });

  it("should delete a student by ID", async () => {
    httpDelete.mockResolvedValueOnce(mockStudent);

    const student = await deleteStudentById(mockStudent.data.id);

    expect(student).toEqual(mockStudent.data);
  });
});
