import { conditionValueMap } from "./Constants";
import { IChildren, IDefaultData } from "../types";

export const queryFormatter = (list: IDefaultData[], connector: string): string => {
    const res = list.map(obj => {
        let str = '';
        if (obj.field) str = ` "(field.${obj.field}) `;
        if (obj.condition) str += obj.condition;
        if (obj.criteria) str += ` \\"${obj.criteria}"\\" `
        return str;
    }).join(connector);

    if (res.endsWith(connector)) {
        return res.slice(0, -2);
    }

    return res;
}

const conjunctionFormatter = (conjunction: string) => {
    if (conjunction === '||') return "OR";
    else return 'AND';
}

export const objFormatter = (list: IDefaultData[], connector: string) => {
    let finalChildrenList = [] as IChildren[];

    list.forEach(values => {
        const { field, condition, criteria } = values;
        const inputCondition = conditionValueMap[condition];
        
        const indexOfExistingFieldNCondition = finalChildrenList.findIndex(childValue => childValue.field === values.field && childValue.condition === inputCondition);
        if (indexOfExistingFieldNCondition === -1) {
            finalChildrenList.push({
                "field": field,
                "condition": inputCondition,
                "value": [criteria],
                "type": "rule"
            })
        } else {
            finalChildrenList[indexOfExistingFieldNCondition].value.push(criteria);
        }
    })

    return {
        "children": finalChildrenList,
        "conjunction": conjunctionFormatter(connector),
        "not": true,
        "type": "rule_group"
    };
}