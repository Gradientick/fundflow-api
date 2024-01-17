async function addTransaction(req, res) {
  res.send("endpoint for adding transaction");
}

async function deleteTransaction(req, res) {
  res.send("endpoint for deleting of transactions");
}

async function getTransactions(req, res) {
  res.send("endpoint for fetching of transactions");
}

async function editTransactions(req, res) {
  res.send("endpoint for editing of transactions");
}

export default {
  addTransaction,
  deleteTransaction,
  getTransactions,
  editTransactions,
};
