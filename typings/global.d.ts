export declare global {
  type AnyObject = Record<string, unknown>;

  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      PORT: string;
    }
  }

  namespace Express {
    interface Request {
      id: string;

      // sso user
      user: {
        id: number;
        name: string;
      };
    }
  }
}
