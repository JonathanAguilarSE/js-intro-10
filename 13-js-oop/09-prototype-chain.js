const engineer = {
    solveProblem: function(){
        console.log('SOLVE PROBLEM');
    }
};


const tester = {
    test: function(){
        console.log('TEST');
    },
    __proto__: engineer
};


const sdet = {
    code: function(){
        console.log('CODE');
    },
    __proto__: tester
};

sdet.code();
sdet.test();
sdet.solveProblem();