const cacheName = 'v1';

const cacheClone = async (e) => {
	const res = await fetch(e.request);
	const resClone = res.clone();

	const cache = await caches.open(cacheName);
	await cache.put(e.request, resClone);
	return res;
};

const fetchEvent = () => {
	self.addEventListener('fetch', (event) => {
		event.respondWith(
			cacheClone(event)
				.catch(() => caches.match(event.request))
				.then((res) => res)
		);
	});
};

fetchEvent();
