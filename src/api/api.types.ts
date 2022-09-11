export interface ApiListError {
  msg: string;
  param?: string;
}

export interface ApiAuthLoginRequest {
  email: string;
  password: string;
}

export interface ApiAuthLoginResponse {
  ok: boolean;
  msg: string;
  token: string;
  user: UserInterface;
  errors: ApiListError[];
}

export interface ApiAuthRevalidateResponse extends ApiAuthLoginResponse { }

export interface ApiSearchUserRequest {
  idStudent: string;
}

export interface ApiSearchUserResponse {
  ok: boolean;
  msg: string;
  errors: ApiListError[];
  user: UserInterface;
}

export interface UserInterface {
  idUser: number;
  idStudent?: string;
  names: string;
  lastnames: string;
  email?: string;
}

export interface PostInterface {
  idPost: number;
  title: string;
  description: string;
  createdAt: string;
  user: {
    idUser: number;
    names: string;
    lastnames: string;
  };
  section: {
    idSection: number;
    section: string;
    teacher: {
      idTeacher: number;
      names: string;
    } | null;
    course: {
      idCourse: number;
      name: string;
      code: string;
    } | null;
  };
}

export interface ApiUserCreateRequest {
  idStudent: string;
  names: string;
  lastnames: string;
  email: string;
  password: string;
  password2: string;
}

export interface APIUserCreateResponse {
  ok: boolean;
  msg: string;
  user?: UserInterface;
  token?: string;
  errors: ApiListError[];
}

export interface ApiErrorInterface {
  ok: boolean;
  msg: string;
  errors: ApiListError[];
}

export interface ApiSearchCourseRequest {
  name: string;
}

export interface ApiSearchCourseResponse {
  ok: boolean;
  msg: string;
  errors: ApiListError[];
  courses: SearchCourseInterface[];
}

export interface SearchCourseInterface {
  idCourse: number;
  name: string;
  code: string;
  sections: {
    idSection: number;
    section: string;
    teacher: {
      idTeacher: number;
      name: string;
    } | null;
  }[];
}

export interface ApiSearchPostResponse {
  ok: boolean;
  msg: string;
  errors: ApiListError[];
  posts: PostInterface[];
}

export interface ApiSearchTeacherRequest {
  name: string;
}

export interface ApiSearchTeacherResponse {
  ok: boolean;
  msg: string;
  errors: ApiListError[];
  teachers: SearchTeacherInterface[];

}

export interface SearchTeacherInterface {
  idTeacher: number;
  name: string;
  sections: {
    idSection: number;
    section: string;
    course: {
      idCourse: number;
      name: string;
      code: string;
    } | null;
  }[]
}
