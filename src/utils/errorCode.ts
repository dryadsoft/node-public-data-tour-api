/**
 * 에러코드표
 */
const errorCodes = [
  { errorCode: "00", errorMessage: "NORMAL_CODE", errorMessageKor: "정상" },
  {
    errorCode: "01",
    errorMessage: "APPLICATION_ERROR",
    errorMessageKor: "어플리케이션 에러",
  },
  {
    errorCode: "02",
    errorMessage: "DB_ERROR",
    errorMessageKor: "데이터베이스 에러",
  },
  {
    errorCode: "03",
    errorMessage: "NODATA_ERROR",
    errorMessageKor: "데이터없음 에러",
  },
  { errorCode: "04", errorMessage: "HTTP_ERROR", errorMessageKor: "HTTP 에러" },
  {
    errorCode: "05",
    errorMessage: "SERVICETIMEOUT_ERROR",
    errorMessageKor: "서비스 연결실패 에러",
  },
  {
    errorCode: "10",
    errorMessage: "INVALID_REQUEST_PARAMETER_ERROR",
    errorMessageKor: "잘못된 요청 파라메터 에러",
  },
  {
    errorCode: "11",
    errorMessage: "NO_MANDATORY_REQUEST_PARAMETERS_ERROR",
    errorMessageKor: "필수요청 파라메터가 없음",
  },
  {
    errorCode: "12",
    errorMessage: "NO_OPENAPI_SERVICE_ERROR",
    errorMessageKor: "해당 오픈API서비스가 없거나 폐기됨",
  },
  {
    errorCode: "20",
    errorMessage: "SERVICE_ACCESS_DENIED_ERROR",
    errorMessageKor: "서비스 접근거부",
  },
  {
    errorCode: "21",
    errorMessage: "TEMPORARILY_DISABLE_THE_SERVICEKEY_ERROR",
    errorMessageKor: "일시적으로 사용할 수 없는 서비스 키",
  },
  {
    errorCode: "22",
    errorMessage: "LIMITED_NUMBER_OF_SERVICE_REQUESTS_EXCEEDS_ERROR",
    errorMessageKor: "서비스 요청제한횟수 초과에러",
  },
  {
    errorCode: "30",
    errorMessage: "SERVICE_KEY_IS_NOT_REGISTERED_ERROR",
    errorMessageKor: "등록되지 않은 서비스키",
  },
  {
    errorCode: "31",
    errorMessage: "DEADLINE_HAS_EXPIRED_ERROR",
    errorMessageKor: "기한만료된 서비스키",
  },
  {
    errorCode: "32",
    errorMessage: "UNREGISTERED_IP_ERROR",
    errorMessageKor: "등록되지 않은 IP",
  },
  {
    errorCode: "33",
    errorMessage: "UNSIGNED_CALL_ERROR",
    errorMessageKor: "서명되지 않은 호출",
  },
  {
    errorCode: "99",
    errorMessage: "UNKNOWN_ERROR",
    errorMessageKor: "기타에러",
  },
];

export const result = (code: string) =>
  errorCodes.find((errorCode) => errorCode.errorCode === code);
