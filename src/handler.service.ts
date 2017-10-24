import buildSyncHandler, {IAsyncHandler} from './async-handler.service';
import applyErrorLoggerMiddleware from './error-logger-middleware.service';
import IHandler from './handler.interface';
import applyInputLoggerMiddleware from './input-logger-middleware.service';
import applyResponseLoggerMiddleware from './response-logger-middleware.service';

export function buildHandler<E, R>(h: IAsyncHandler<E, R>): IHandler<E, R> {
	return buildSyncHandler(
		applyResponseLoggerMiddleware(
			applyInputLoggerMiddleware(
				applyErrorLoggerMiddleware(h, console),
				console,
			),
		),
	);
}
