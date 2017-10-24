import {IAsyncHandler} from './async-handler.service';

export default function apply<E, R>(h: IAsyncHandler<E, R>): IAsyncHandler<E, R> {
	return async (event, ctx) => {
		const response = await h(event, ctx);
		console.log(`[RESPONSE] ${JSON.stringify(response)}`);

		return response;
	};
}
