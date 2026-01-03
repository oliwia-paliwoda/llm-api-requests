import type {LLMResponse} from "./index.js";


function csvParse (data: LLMResponse[]) {

    if (!data.length) return '';

    const headers = Object.keys(data[0]!) as (keyof LLMResponse)[];

    const csvRows = [
        headers.join(','),
        ...data.map(row =>
            headers.map(header => {
                let value = row[header];
                if (value === null || value === undefined) value = '';
                if (typeof value === 'string') {
                    value = value.replace(/\n/g, '\\n');
                    if (value.includes(',') || value.includes('"')) {
                        value = `"${value.replace(/"/g, '""')}"`;
                    }
                }
                return value;
            }).join(',')
        )
    ];


    return csvRows.join('\n');
}

export default csvParse;