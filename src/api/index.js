
const root = 'https://lab.lectrum.io/rtx/api';

export const api = Object.freeze({
    weather: {
        fetch: ()=> {
            return fetch(`${root}/forecast?limit=7`, {
                method: 'GET',
            });
        }
    }
});
