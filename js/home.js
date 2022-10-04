////////////////
//Email Creation
////////////////
const ADDR = 'michal.lewkowicz',
      DOMAIN = 'yale.edu';
document.getElementById('email').href = 'mailto' + ':' + ADDR + '@' + DOMAIN;