# Issue with grpcweb and vite

Ths repo tries diffrent solutions, provodes here:

* https://github.com/grpc/grpc-web/issues/1242
* https://github.com/vitejs/vite/discussions/8926#discussioncomment-7143295


## Create React App

```
npm install
npm run start
```

* Open http://localhost:3000

Result: 

* Works.

## Solution by martinpokorny

```
git checkout martinpokorny
npm install
npm run start
```

Issue: Not working without vite:

> Uncaught SyntaxError: The requested module '/src/grpc/echo_pb.js' does not provide an export named 'EchoRequest' (at App.tsx:4:10)

Source:

* https://github.com/vitejs/vite/discussions/8926#discussioncomment-7143295

## Solution by mvonwaldner

```
git checkout mvonwaldner
npm install
npm run start
```

Issue: Already not working with CRA:

> Uncaught TypeError: service.EchoRequest is not a constructor

* Open http://localhost:3000

Source:

* https://github.com/grpc/grpc-web/issues/1242#issuecomment-1731152138
