import {IAsyncHandler} from './async-handler.functor';

export default function apply<E, R>(
	h: IAsyncHandler<E, R>,
	console: Console,
): IAsyncHandler<E, R> {
	return async (event, ctx) => {
		try {
			return await h(event, ctx);
		} catch (err) {
			if (err instanceof Error) {
				console.log(`
[LAMBDA-HANDLER] [ERROR]
${err.stack}
${JSON.stringify(err)}
`);
			} else {
				console.error('[LAMBDA-HANDLER] [ERROR]', JSON.stringify(err));
			}

			throw err;
		}
	};
}
