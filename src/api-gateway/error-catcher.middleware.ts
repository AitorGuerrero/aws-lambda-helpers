import IAsyncApiHandler from './async-api-handler.interfaces';
import ApiGatewayError from './error.class';

export default function apply(handle: IAsyncApiHandler): IAsyncApiHandler {
	return async (event, ctx) => {
		try {
			return await handle(event, ctx);
		} catch (err) {
			return transformError(err, ctx.awsRequestId);
		}
	};
}

function transformError(err: any, awsRequestId: string) {
	if (null === err || undefined === err) { return err; }
	if (err instanceof ApiGatewayError) {
		return {
			body: JSON.stringify({
				awsRequestId,
				error: {
					code: err.name,
					detail: err.detail,
					message: err.message,
				},
				success: false,
			}),
			headers: {},
			statusCode: err.statusCode,
		};
	}

	return {
		body: JSON.stringify({
			awsRequestId,
			error: {code: 'system-error'},
			success: false,
		}),
		headers: {},
		statusCode: 500,
	};
}
