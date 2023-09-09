/** @param {NS} ns */
export async function main(ns) {
var server = "Ectra"
ns.scriptKill("whg.js", server)
  await ns.deleteServer(server)
  
}
