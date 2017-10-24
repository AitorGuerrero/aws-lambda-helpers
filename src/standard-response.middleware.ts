import {IAsyncHandler} from './async-handler.functor';

export interface IStandardResponse<D> {
	awsRequestId: string;
	success: boolean;
	data?: D;
	error?: {
		code: string;
		message?: string;
	};
}

export default function apply<E, R>(
	handle: IAsyncHandler<E, R>,
): IAsyncHandler<E, IStandardResponse<R>> {
	return async (event, ctx) => {
		try {
			return {
				awsRequestId: ctx.awsRequestId,
				data: await handle(event, ctx),
				success: true,
			};
		} catch (err) {
			if (err instanceof Error) {
				return {
					awsRequestId: ctx.awsRequestId,
					error: {
						code: err.name,
						message: err.message,
					},
					success: false,
				};
			} else if (typeof err === 'string') {
				return {
					awsRequestId: ctx.awsRequestId,
					error: {code: err},
					success: false,
				};
			}
		}
	};
}
