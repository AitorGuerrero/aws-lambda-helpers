import {IAsyncHandler} from '../async-handler.functor';
import IEvent from './event.interface';
import IResponse from './response.interface';

type IAsyncApiHandler = IAsyncHandler<IEvent, IResponse>;

export default IAsyncApiHandler;
