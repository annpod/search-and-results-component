# Requirements
Node - Refer to /.nvmrc

# Installation

## To run  in development mode:

Open a new terminal and run

```
  npm install
  npm start
```

## To run `example` in development mode:

1. Open a second terminal and run

```
cd /example
npm install
cp .env.example .env.local
```

2. Ask your Team Lead for the .env.local values
3. Run

```
npm start
```

## Run SSL Proxy

Open a third terminal and run proxy as per https://connectib.atlassian.net/wiki/spaces/CV4/pages/1011417198/Using+OAuth+Identity+Server+when+Developing+Locally

Access site via https://ssdev.platform.localhost:29000/

