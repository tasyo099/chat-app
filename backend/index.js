const express = require("express"); //runs http server
const cors = require("cors");//call server from any other origin

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  
  try{
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: {"private-key": "0c281fab-972e-4f7e-9fc2-a76cfd66d5a3" } } 
    );
    return res.status(r.status).json(r.data);
  } catch(e){
    return res.status(e.response.status).json(e.response.data);
  }
}); 

app.listen(3001);