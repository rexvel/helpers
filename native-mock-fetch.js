// taken from https://x.com/mattpocockuk/status/1841074839446003927
import { MockAgent, setGlobalDispatcher } from "undici";

const mockAgent = new MockAgent();
setGlobalDispatcher(mockAgent);

// 3. Mock a certain URL
const mockPool = mockAgent.get("http://localhost:3000");

// 4. Mark the URL to intercept, and the reply to send back
mockPool
  .intercept({
    path: "/me",
    method: "GET",
  })
  .reply(200, {
    id: "123",
    name: "Matt",
  });

// 5. Any fetch requests to the URL will now be intercepted!
fetch("http://localhost:3000/me")
  .then((res) => res.json())
  .then((user) => {
    console.dir(user); // { id: '123', name: 'Matt' }
  });
