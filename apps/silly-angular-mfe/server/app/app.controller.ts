import { Controller, Get, Header, Param, StreamableFile } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';

@Controller()
export class AppController {
  
  //TODO: run validation against fname if you're going to have one endpoint access files in the dist folder
  //TODO: do not allow requests from any origin - this is just to prove how you could serve the MFE outside a webpack dev server
  @Get('/:fname')
  @Header('Access-Control-Allow-Origin', '*')
  @Header('Content-Type', 'text/javascript')
  getMFE(@Param('fname') fname: string): StreamableFile {
    const file = createReadStream(join(__dirname, '..', '..', '..', 'dist', 'apps', 'silly-angular-mfe', fname));
    return new StreamableFile(file)
  }
}
