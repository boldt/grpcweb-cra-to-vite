import { useEffect, useState } from 'react';
import './App.css';
import { EchoServiceClient } from './grpc/EchoServiceClientPb';
const service = require('./grpc/EchoServiceClientPb');


function App() {

  const [echoResponse, setEchoResponse] = useState<string | undefined>(undefined);

  useEffect(() => {
    var echoService = new EchoServiceClient('http://localhost:8080');
    
    var request = new service.EchoRequest();
    request.setMessage('Hello World!');

    echoService.echo(request, {}, function(err, response) {
      if(!err) setEchoResponse(response.toObject().message);
    });

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Response: {echoResponse ? echoResponse : "No response yet!"}
        </p>
      </header>
    </div>
  );
}

export default App;
