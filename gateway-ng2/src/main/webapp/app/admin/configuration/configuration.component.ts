import { Component, OnInit } from '@angular/core';

import { JhiConfigurationService } from './configuration.service';

@Component({
    selector: 'jhi-configuration',
    templateUrl: 'app/admin/configuration/configuration.html'
})
export class JhiConfigurationComponent {
    allConfiguration:any = null;
    configuration:any = null;
    configKeys:any[];
    filter: string;
    orderProp: string;
    reverse: boolean;

    constructor(private configurationService:JhiConfigurationService){
        this.configKeys = [];
        this.filter = '';
        this.orderProp = 'prefix';
        this.reverse = false;
    }


    keys(dict) : Array<string> {
        return Object.keys(dict);
    }

    ngOnInit() {
        this.configurationService.get().subscribe((configuration) => {
            this.configuration = configuration;

            for(var config of configuration) {
                this.configKeys.push(Object.keys(config.properties));
            }
        });

        this.configurationService.getEnv().subscribe((configuration) => {
            this.allConfiguration = configuration;
        });
    }
}