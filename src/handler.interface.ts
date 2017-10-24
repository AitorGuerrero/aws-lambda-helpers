type IHandler<E, R> = (e: E, ct: any, cb: (err?: any, data?: R) => void) => void;

export default IHandler;
