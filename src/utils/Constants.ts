export const CONJUNCTIONS: Record<string, string> = {
    "AND": "&&",
    "OR": "||"
}

export const DEFAULT_CONJUNCTION = CONJUNCTIONS.AND;

const FIELD_VALUES = ['Theme', 'Sub-theme', 'Reason', 'Language', 'Source', 'Rating', 'Time Period', 'Customer ID'];

const CRITERIA_VALUES = ['Offers', 'Performance', 'Platform', 'Product Feedback'];

export const FIELDS = FIELD_VALUES.map(field => { return { title: field, value: field } });

export const conditionValueMap: Record<string, string> =  {
    "==": "Equals",
    "!=": "Does not equal",
    "Like": "Like",
    "Not Like": "Not Like",
    "Is Empty": "Is Empty",
    "Is": "Is",
    "Is Not": "Is Not"
}

export const CONDITIONS = Object.keys(conditionValueMap).map(condition => {
    return { title: conditionValueMap[condition], value: condition }
});

export const CRITERIAS = CRITERIA_VALUES.map(criteria => { return { title: criteria, value: criteria } });
