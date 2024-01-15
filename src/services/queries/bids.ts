import { bidHistoryKey } from '$services/keys';
import { client } from '$services/redis';
import type { CreateBidAttrs, Bid } from '$services/types';
import { DateTime } from 'luxon';

export const createBid = async (attrs: CreateBidAttrs) => {
	const serialize = serializeHistory(attrs.amount, attrs.createdAt.toMillis());
	return client.rPush(bidHistoryKey(attrs.itemId), serialize);
};

export const getBidHistory = async (itemId: string, offset = 0, count = 10): Promise<Bid[]> => {
	const startIndex = -1 * offset - count;
	const endIndex = -1 - offset;

	const range = await client.lRange(bidHistoryKey(itemId), startIndex, endIndex);
	return range.map((bid) => deserializeHistory(bid));
};

const serializeHistory = (amount: number, createdAt: number) => {
	return `${amount}:${createdAt}`;
};

const deserializeHistory = (stored: string): { amount: number; createdAt: DateTime } => {
	const [amount, createdAt] = stored.split(':');
	return {
		amount: +amount,
		createdAt: DateTime.fromMillis(+createdAt)
	};
};
