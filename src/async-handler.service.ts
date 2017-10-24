import IContext from './api-gateway.interfaces';

export type IAsyncHandler<E, R> = (event: E, context: IContext) => Promise<R>;

export default function build<E, R>(handler: IAsyncHandler<E, R>) {
	return async (event: E, context: IContext, callback: any) => {
		try {
			callback(null, await handler(event, context));
		} catch (err) {
			callback(err);
		}
	};
}
