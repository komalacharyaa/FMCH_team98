const path = require('path');

const Aww = require('./models/aww');
const Sessions = require('./models/sessions');
const Ben = require('./models/ben');
const problem = require('./models/problem');

exports.getMain = (req, res, next) => {
    res.redirect('/login');
};

exports.getLogin = (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
};

exports.getBen = (req, res, next) => {
    Ben.findAll()
        .then(ben => {
            res.send(ben);
        })
        .catch(err => {console.log(err)});
};

exports.postLogin = async (req, res, next) => {
    const password = req.body.password;
    const username = req.body.username;

    await Aww.findOne({where: { name: username }})
        .then(aww => {
            if(!aww)
                return res.redirect('/login');
            if(password == aww.password) {
                req.session.user = aww;
                return res.redirect('/worker');
            }
        })
        .catch(err => {console.log(err)});
};

exports.getWorker = (req, res, next) => {
    console.log(req.session.user);
    res.sendFile(path.join(__dirname, 'AWW_Worker', 'index.html'))
};

exports.postAddSession = (req, res, next) => {
    const ben_id = req.body.ben_id;
    const trimester = req.body.trimester;
    const problemId = req.body.problemId;
    const advice = req.body.advice.toString();
    const medicine = req.body.medicine.toString();
    const session_Date = req.body.Date;
    const start = req.body.start;
    const end = req.body.end;

    req.session.user.createSessions({
        ben_id: ben_id,
        trimester: trimester,
        problemId: problemId,
        advice: advice,
        medicine: medicine,
        Session_Date: session_Date,
        Session_start: start,
        Session_end: end
    })
        .then(() => {
            res.redirect('/worker');
        })
        .catch(err => {console.log(err)});

    // Ben.findByPk(id)
    //     .then(ben => {
    //         return ben.createSessions({
    //             trimester: trimester,
    //             problemId: problemId,
    //             Session_Date: session_Data,
    //             Session_start: start,
    //             Session_end: end
    //         });
    //     })
    //     .then(() => {
    //         res.redirect('/worker');
    //     })
        // .catch(err => {console.log(err)});
};

exports.getBenData = async (req, res, next) => {
    const ben_id = req.body.ben_id;
    let sessionData = {};
    await req.session.user.getSessions({where : { ben_id: ben_id} })
        .then(sessions => {
            sessionData = sessions;
            return sessions.problemId;
        })
        .then(problemId => {
            return problem.findByPk(problemId);
        })
        .then(problem => {
            sessionData.problem = problem;
            return problem.answerId;
        })
        .then(answer => {
            sessionData.answer = answer;
        })
        .catch(err => {console.log(err)});
    
    res.send(sessionData);
};

exports.getAdviceMedicine = (req, res, next) => {


    res.sendFile(path.join(__dirname, 'views', 'worker.html'));


    // const title = "Title 1";
    // const advice = ["Advice1", "Advice2", "Advice3"];
    // const medicine = ["Medicine1", "Medicine2", "Medicine3"];
    // const data = {
    //     title: title,
    //     advice: advice,
    //     medicine: medicine
    // };
    // res.send(data);
};

exports.getFirstTrimester = (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'problems.html'));
};  

exports.postProblem1 = (req, res, next) => {
    const advice = req.body.advice.toString();
    const medicine = req.body.medicine.toString();

};

// exports.getBeneficiary = (req, res, next) => {
//     const id = req.params.id;
//     db.execute('SELECT * FROM aww natural join beneficiary')
//         .then(beneficiary => {
//             beneficiary = beneficiary[0];
//             res.sendFile(path.join(__dirname, 'views', 'beneficiary.html'));
//         })
//         .catch(err => {console.log(err)});
// };