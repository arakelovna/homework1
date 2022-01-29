const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Linda","salary":1500},
    {"name":"Ann","salary":1200},
    {"name":"Bill","salary":700},
    {"name":"Bob","salary":2000},
    {"name":"Sid","salary":3000},
    {"name":"Karl","salary":700},];

    const getWorthyWorkers = workersArr => {
        const WorthyWorkers = [];

        workersArr.forEach(currentWorker => {
            if (currentWorker.salary > 1000) {
                WorthyWorkers.push(currentWorker.name);
            }

        })

        // for (let i = 0; i< workers.length; i++) {
        //     const currentWoker = workersArr[i];
        //     if (currentWoker.salary > 1000) {
        //         WorthyWorkers.push(currentWoker.name);
        //     }
        // }
        return WorthyWorkers;

    };
    console.log(getWorthyWorkers(workers));
 