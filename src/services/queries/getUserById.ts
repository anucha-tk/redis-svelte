import { usersKey } from '$services/keys';
import { client } from '$services/redis';
import { deserialize } from './items';

export const getUserById = async (id: string) => {
	const user = await client.hGetAll(usersKey(id));
	return deserialize(id, user);
};
