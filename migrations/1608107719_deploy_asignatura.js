let Asignatura = artifacts.require("Asignatura");

module.exports = function(_deployer) {
  // Use deployer to state migration tasks.
  _deployer.deploy(Asignatura, "BCDA", "2020-2021");
};
