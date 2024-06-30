import fse from 'fs-extra/esm'
const __dirname = process.cwd();
import path from 'path';

const outdir = [path.resolve(__dirname, 'build')]

fse.emptyDirSync(outdir[0]);
