import { Message } from './message';
import User from './user';

export default interface Chat {
  id: string;
  user: User;
  lastMessage: Message;
}
