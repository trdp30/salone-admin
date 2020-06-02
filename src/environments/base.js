export default function (API_ROOT, envName) {
  return {
    API_ROOT: API_ROOT ? API_ROOT : "https://homswag.herokuapp.com/api/v1",
    isProduction: true,
    isDevelopment: false,
    isStaging: false,
    envName: envName ? envName : 'production'
  };
}