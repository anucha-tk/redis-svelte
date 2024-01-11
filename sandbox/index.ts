import 'dotenv/config';
import { client } from '../src/services/redis';

const run = async () => {
	await client.hSet('car', {
		color: 'red',
		year: 1950
	});
	const cars = await client.hGetAll('car');
	if (Object.keys.length) console.log('>>>', cars);
	console.log(`don't has car id}`);
};
run();
