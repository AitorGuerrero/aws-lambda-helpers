import {IAsyncHandler} from './async-handler.functor';

export default function apply<E, R>(h: IAsyncHandler<E, R>): IAsyncHandler<E, R> {
	return async (event, ctx) => {
		const response = await h(event, ctx);
		console.log(`[LAMBDA-HANDLER] [RESPONSE] ${JSON.stringify(response)}`);

		return response;
	};
}
