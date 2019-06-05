import {YqUtils} from '@yq/core';

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
        this.id = list.id || YqUtils.generateGUID();
        this.name = list.name || '';
        this.idCards = [];
    }
}
