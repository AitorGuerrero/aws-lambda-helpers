import buildSyncHandler from '../async-handler.functor';
import applyErrorLoggerMiddleware from '../error-logger.middleware';
import IHandler from '../handler.interface';
import applyInputLoggerMiddleware from '../input-logger.middleware';
import applyResponseLoggerMiddleware from '../response-logger.middleware';
import IAsyncApiHandler from './async-api-handler.interfaces';
import buildErrorCatcher from './error-catcher.middleware';
import IEvent from './event.interface';
import IResponse from './response.interface';

export function buildApiHandler(h: IAsyncApiHandler, console: Console): IHandler<IEvent, IResponse> {
	return buildSyncHandler(
		applyResponseLoggerMiddleware(
			buildErrorCatcher(
				applyInputLoggerMiddleware(
					applyErrorLoggerMiddleware(h, console),
					console,
				),
			),
		),
	);
}
