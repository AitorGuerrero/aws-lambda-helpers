import buildErrorCatcher from './api-gateway-error-catcher';
import {IAsyncApiHandler, IEvent, IResponse} from './api-gateway.interfaces';
import buildSyncHandler from './async-handler.service';
import applyErrorLoggerMiddleware from './error-logger-middleware.service';
import IHandler from './handler.interface';
import applyInputLoggerMiddleware from './input-logger-middleware.service';
import applyResponseLoggerMiddleware from './response-logger-middleware.service';

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
