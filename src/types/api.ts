export interface ApiSuccessResponse<T> {
  data: T;
}

export interface ApiExceptionResponse {
  code: ErrorCodeValue;
  description: string;
  details: string;
}

export const ERROR_CODES = {
  USER_UNAUTHORIZED: '0001',
  USER_NOT_FOUND: '0002',
  USER_DUPLICATED: '0003',
  USER_PASSWORD_NOT_MATCH: '0004',
  JWT_TOKEN_INVALID: '0005',
  INVALID_PARAMETER: '0006',
  AUTH_CODE_NOT_FOUND: '0007',
  USER_FORBIDDEN: '0008',
  INTERVAL_SERVER_ERROR: '9999',
} as const;

export type ErrorCodeKey = keyof typeof ERROR_CODES;
export type ErrorCodeValue = (typeof ERROR_CODES)[ErrorCodeKey];

export const ERROR_MESSAEGS: Record<ErrorCodeValue, string> = {
  '0001': '로그인이 필요합니다.',
  '0002': '사용자를 찾을 수 없습니다.',
  '0003': '이미 존재하는 사용자입니다.',
  '0004': '비밀번호가 일치하지 않습니다.',
  '0005': '유효하지 않은 토큰입니다.',
  '0006': '잘못된 요청입니다.',
  '0007': '인증 코드가 존재하지 않습니다.',
  '0008': '접근 권한이 없습니다.',
  '9999': '서버 내부 오류가 발생했습니다.',
};
