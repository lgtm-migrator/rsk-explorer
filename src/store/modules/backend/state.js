export default function () {
  return {
    serverTime: Date.now(),
    clientTime: Date.now(),
    systemSettings: {},
    requesting: {},
    responses: {},
    blocks: [],
    lastBlocks: [],
    pendingBlocks: {},
    dbStatus: {},
    missingBlocks: {
      blocks: 1,
      time: 0
    },
    lastBlocksTime: 0,
    transactions: [],
    lastTransactions: []
  }
}
