import React, {useEffect, useState}  from 'react';
import './App.css';
import Mention from './Mention';

const account_id = "661072_53ca2jsh01c88c4wwkc0wockckk0w4440o4o0w8wkkgco4o888";
const alert_id = "1214654";

const App = () => {

  const [mentions, setMentions] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  
  const getData = async () => {
  
    const response = await fetch(`https://web.mention.com/api/accounts/${account_id}/alerts/${alert_id}/mentions?access_token=ZDdmNDVmYzU1NWZkMDkwMDc4YjBjMzYyZDk2MDI3NGVlNmFmNTJkZDU5MzBhYWRiZGZmNzAxOGM1NDkzNDYxYQ`);
    const data = await response.json();
    console.log(data);
    setMentions(data.mentions);
  }

  return (
    <div className="App">
      {mentions.map(mention => (
        <Mention
          displayable_url={mention.displayable_url}
          title={mention.title}
          updated_at={mention.updated_at}
          image={mention.picture_url}
          description={mention.description_short}
          read={mention.read}
        />
      ))};
    </div>
  );
}

export default App;
