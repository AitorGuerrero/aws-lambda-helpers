import {IAsyncHandler} from './async-handler.functor';

export default function apply<E, R>(
	h: IAsyncHandler<E, R>,
	console: Console,
): IAsyncHandler<E, R> {
	return (event, ctx) => {
		console.log(`[INPUT] ${JSON.stringify(event)}`);

		return h(event, ctx);
	};
}
