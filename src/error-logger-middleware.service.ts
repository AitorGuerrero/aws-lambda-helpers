import {IAsyncHandler} from './async-handler.service';

export default function apply<E, R>(
	h: IAsyncHandler<E, R>,
	console: Console,
): IAsyncHandler<E, R> {
	return async (event, ctx) => {
		try {
			return await h(event, ctx);
		} catch (err) {
			console.error('[ERROR]', JSON.stringify(err));

			throw err;
		}
	};
}
