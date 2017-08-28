fetch('https://api.cdnjs.com/libraries/')
    .then(res=>res.json())
    .then(json => json['results'].map(
        result => {
            if(result['name'].length === 2)
                console.log(result['name']);
            }
    ));


fetch('https://api.cdnjs.com/libraries?fields=description,version,repository')
    .then(res=>res.json())
    .then(json => json['results'].map(
        result => {
            if(result['repository'] && result['repository']['type'] !== 'git')
                console.log(result['name'],result['repository']['type']);
            }
    ));

fetch('https://api.cdnjs.com/libraries/')
    .then(res=>res.json())
    .then(json => json['results'].map(
        result => {
            if(result['latest'].endsWith('css') || result['latest'].endsWith('js'))
                console.log(result['name']);
            }
    ));