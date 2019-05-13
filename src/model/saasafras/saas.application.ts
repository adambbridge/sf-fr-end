import { Application } from '../podio/application';
import { $Field } from './saas.field';
export class $Application {
    constructor(public appName: string, public appId: Number, public podioApplication: Application, public fields: $Field[]) { }
}
