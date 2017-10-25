import buildSyncHandler, {IAsyncHandler} from './async-handler.functor';
import applyErrorLoggerMiddleware from './error-logger.middleware';
import IHandler from './handler.interface';
import applyInputLoggerMiddleware from './input-logger.middleware';
import applyResponseLoggerMiddleware from './response-logger.middleware';
import applyStandardResponse from './standard-response.middleware';

export function buildHandler<E, R>(h: IAsyncHandler<E, R>): IHandler<E, R> {
	return buildSyncHandler(
		applyStandardResponse(
			applyResponseLoggerMiddleware(
				applyInputLoggerMiddleware(
					applyErrorLoggerMiddleware(h, console),
					console,
				),
			),
		),
	);
}
