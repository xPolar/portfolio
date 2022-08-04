export const manifest = {
	appDir: "_app",
	assets: new Set(["CaskaydiaCoveNerdFontCompleteM-.eot","CaskaydiaCoveNerdFontCompleteM-.ttf","CaskaydiaCoveNerdFontCompleteM-.woff","CaskaydiaCoveNerdFontCompleteM-.woff2","favicon.png","robots.txt","svelte-welcome.png","svelte-welcome.webp"]),
	mimeTypes: {".eot":"application/vnd.ms-fontobject",".ttf":"font/ttf",".woff":"font/woff",".woff2":"font/woff2",".png":"image/png",".txt":"text/plain",".webp":"image/webp"},
	_: {
		entry: {"file":"_app/immutable/start-6248c226.js","imports":["_app/immutable/start-6248c226.js","_app/immutable/chunks/index-44f85c91.js","_app/immutable/chunks/preload-helper-c28b9807.js"],"stylesheets":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export const prerendered = new Set(["/"]);
