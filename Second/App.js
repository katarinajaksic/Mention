import React, {useEffect, useState}  from 'react';
import './App.css';
import Mention from './Mention';

const account_id = process.env.alert_id;
const alert_id = process.env.account_id;
const access_token = process.env.account_id;

const App = () => {

  const [mentions, setMentions] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  
  const getData = async () => {
  
    const response = await fetch(`https://web.mention.com/api/accounts/${account_id}/alerts/${alert_id}/mentions?access_token=${access_token}`);
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
