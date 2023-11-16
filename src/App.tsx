import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { EchoServiceClient } from './grpc/EchoServiceClientPb';
import { EchoRequest } from './grpc/echo_pb';

function App() {

  const [echoResponse, setEchoResponse] = useState<EchoRequest.AsObject | undefined>(undefined);

  useEffect(() => {
    var echoService = new EchoServiceClient('http://localhost:8080');
    
    var request = new EchoRequest();
    request.setMessage('Hello World!');

    echoService.echo(request, {}, function(err, response) {
      setEchoResponse(response.toObject());
    });

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Response: {echoResponse ? echoResponse.message : "No response yet!"}
        </p>
      </header>
    </div>
  );
}

export default App;
