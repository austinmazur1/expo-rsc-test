// When using api routes we need to set web.output to server. in App.json

// "web": {
//       "bundler": "metro",
//       "output": "static", //Change this from static to server
//       "favicon": "./assets/images/favicon.png"
//     },

// Not bundled, only available in api route
const key = process.env.SECURE_KEY; 

export async function GET(request: Request) {
  const name = new URL(request.url).searchParams.get("name");
  return Response.json({
    message: `Hello ${name || "World"}`,
  });
}
