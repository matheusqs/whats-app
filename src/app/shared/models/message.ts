export interface Message {
  content: string;
  sentDatetime: Date;
  hasCurrentUserSent: boolean;
  chatId: string;
}
