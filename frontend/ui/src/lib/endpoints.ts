const api = import.meta.env.VITE_BACKEND_URI;

export const SIGNUP_API = api + "/signup";
export const LOGIN_API = api + "/login";
export const LOGOUT_API = api + "/logout";

export const HEALTHCHECK_API = api + "/healthcheck";
export const SEND_OTP_API = api + "/otp/send";
export const VERIFY_OTP_API = api + "/otp/verify";

export const healthcheckAPI = api + "/healthcheck";
export const sendOtpAPI = api + "/otp/send";
export const verifyOtpAPI = api + "/otp/verify";

export const externalStripePaymentAPI = api + "/stripe/external/create-payment-intent";
export const externalConvertToOSMOAPI = api + "/external/transfer-to-osmo";
export const externalConvertToNobleAPI = api + "/external/transfer-to-noble";
export const externalGetData = api + "/external/get-data";

export const getUserAPI = api + "/user";
export const createKYC = api + "/kyc/create";
export const getKYCStatusAPI = api + "/kyc/status";
export const convertToCosmosAPI = api + "/make-payment/transfer-to-cosmos"
export const convertToOSMOAPI = api + "/make-payment/transfer-to-osmo"
export const DASHBOARD_API = api + '/dashboard/applications'
