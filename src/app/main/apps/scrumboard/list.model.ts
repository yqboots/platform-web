import {FuseUtils} from '@fuse/core';

export class List {
    id: string;
    name: string;
    idCards: string[];

    /**
     * Constructor
     *
     * @param list
     */
    constructor(list) {
        this.id = list.id || FuseUtils.generateGUID();
        this.name = list.name || '';
        this.idCards = [];
    }
}
