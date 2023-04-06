export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.b4a40e0e.js","imports":["_app/immutable/entry/start.b4a40e0e.js","_app/immutable/chunks/index.d365e05a.js","_app/immutable/chunks/singletons.daa70273.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.6b2ae480.js","imports":["_app/immutable/entry/app.6b2ae480.js","_app/immutable/chunks/index.d365e05a.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
