export const pageCacheKey = (id: string): string => `pagecache#${id}`;
export const usersKey = (userId: string): string => `users#${userId}`;
export const sessionsKey = (sessionId: string): string => `sessions#${sessionId}`;
export const usernamesUniqueKey = (): string => `usernames:unique`;
export const userLikesKey = (userId: string): string => `users:likes#${userId}`;
export const usernamesKey = () => 'usernames';
// items
export const itemsKey = (itemId: string): string => `items#${itemId}`;
export const itemsByViewsKey = (): string => 'items:views';
export const itemsByEndingAtKey = (): string => 'items:endingAt';
