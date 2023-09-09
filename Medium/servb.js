/** @param {NS} ns */
export async function main(ns) {
    // How much RAM each purchased server will have. In this case, it'll
    // be 8GB. Changed to 8.192 Tib, but exchanges it to TB.
    const ram = 32768;
    var ramtb = 32000;

      //Costs about 400m == 8192 Tib
      //Costs about 800m == 16384 Tib
      //Costs about 1.6b == 32768 Tib

    // Iterator we'll use for our loop
    let i = 0;
    // Continuously try to purchase servers until we've reached the maximum
    // amount of servers
    while (i < ns.getPurchasedServerLimit()) {
        // Check if we have enough money to purchase a server
        // Check for servers with low max ram as well.
        if (ns.getServerMoneyAvailable("home") > ns.getPurchasedServerCost(ram)) {
            // If we have enough money, then:
            //  1. Purchase the server
            //  2. Copy our hacking script onto the newly-purchased server
            //  3. Run our hacking script on the newly-purchased server with 3 threads
            //  4. Increment our iterator to indicate that we've bought a new server
            let home = ns.purchaseServer("pserv-" + i, ram);
            ns.scp("whg.js", home);
             ns.exec("whg.js", home, (ramtb/2.56))
            ++i;
        }
        //Make the script wait for a second before looping again.
        //Removing this line will cause an infinite loop and crash the game.
        await ns.sleep(10000);
    }
}
