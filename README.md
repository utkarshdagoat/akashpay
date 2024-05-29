<p align="center"><img src="./frontend/logo.svg" width="300"></p>
<p align="center">The open source fiat payment system for <b>Akash Network</b></p>
 <h3> Winner of the akashathon-2 fiat payment gateway track 🚀🌕 </h3>
### All our documentation is on the gitbook <a href="https://akash-pay.gitbook.io/akash_pay">here</a>

### How to get running 
- Go into frontend and do:
    `yarn && yarn dev --port 5174`
- Go into backend and do:
    `npm i && npm run dev`

Here is a sample env
```
backend
# PORT
PORT=8080

# DATABASE
DATABASE_URL=
# TOKEN


STRIPE_SECRET_KEY=
SECRET_KEY=

SMTP_HOST=
SMTP_PORT=
SMTP_MAIL=
SMTP_APP_PASS=


ARBITRUM_TOKEN_MESSENGER_CONTRACT=0x9f3B8679c73C2Fef8b59B4f3444d4e156fb70AA5
ARBITRUM_USDC_ETH_CONTRACT=0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d
ARBITRUM_RPC
ESCROW_PRIV_KEY=
NOBLE_ADDRESS=
NOBLE_MNEMONIC=
NOBLE_RPC=https://rpc.testnet.noble.strange.love
UPLOADTHING_ID=
UPLOADTHING_SECRET=
NOBLE_OSMO_CHANNEL=
# LOG
LOG_FORMAT = dev
LOG_DIR = ../logs

# CORS
ORIGIN = 'http://localhost:5174'
CREDENTIALS = true
```
