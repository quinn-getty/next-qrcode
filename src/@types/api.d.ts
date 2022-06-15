type CustomAPIResponse<T extends any> = {
  success: boolean;
  error?: string;
  data?: T;
};
