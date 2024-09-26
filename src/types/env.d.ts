declare namespace NodeJS {
  export interface ProcessEnv {
    APP_API_URL: string;
    LOCAL_STORAGE_KEY: string;
  }
}
// Taking png images as an example
declare module '*.png' {
  const content: string;
  export default content;
}

// Taking png images as an example
declare module '*.scss' {
  const content: any;
  export default content;
}
