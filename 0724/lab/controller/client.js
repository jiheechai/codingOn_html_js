const {Client, Waiting} = require('../models');

exports.addList = async(req, res) => {
    //고객 db넣는 동시에 대기열 db에도 넣는다.
    try{
        //console.log(req.body);
        const { userName, email } = req.body;
        //고객 존재 여부 확인
        const find = await Client.findOne({where : {userName, email}});
        console.log('find : ', find);
        if(find) {
            const sts = "waiting";
            const now = new Date();   
            const year = now.getFullYear();
            const month = ('0' + (now.getMonth()+1)).slice(-2);
            const date = ('0' + now.getDate()).slice(-2);
            const hours = ('0' + now.getHours()).slice(-2); 
            const minutes = ('0' + now.getMinutes()).slice(-2);
            const seconds = ('0' + now.getSeconds()).slice(-2); 
            const timeString = year + '.' + month + '.' + date + ' ' + hours + ':' + minutes  + ':' + seconds;
            const waitingStart = timeString;
            const waitingEnd = "";
            // 고객이 이미 존재하면 waiting db에만 넣는다.
            await Waiting.create({sts, waitingStart, waitingEnd, clientId: find.id});
            res.json({result : true});
        } else {
            //고객db에 넣는다.
            const result = await Client.create({userName, email});
            console.log('addclientlist', result);
            const sts = "waiting";
            
            const today = new Date();   
            const year = today.getFullYear();
            const month = ('0' + (today.getMonth()+1)).slice(-2);
            const date = ('0' + today.getDate()).slice(-2);
            const hours = ('0' + today.getHours()).slice(-2); 
            const minutes = ('0' + today.getMinutes()).slice(-2);
            const seconds = ('0' + today.getSeconds()).slice(-2); 
            const timeString = year + '.' + month + '.' + date + ' ' + hours + ':' + minutes  + ':' + seconds;
            const waitingStart = timeString;
            const waitingEnd = "";

            //대기열 db에 넣는다.
            await Waiting.create({sts, waitingStart, waitingEnd, clientId: result.id});
            res.json({result : true});
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({result : false, message : '서버오류'});
    }
}

exports.administerView = async(req, res) => {
    try{
        // console.log(req.body);
        const {admin} = req.body;
        //관리자 키 확인. 키를 입력하세요 confirm창 띄워서 administer라고 치면 입장 가능.      
        if(admin != 'admin') {
            res.json({flag : false, message : "관리자 확인 키가 틀렸습니다.", admin});
        } else {
            const result = await Waiting.findAll({
                include : [{model : Client}],
            });
            res.json({flag : true, res : result});
        }

    } catch(error) {
        console.log(error);
        res.status(500).json({result : false, message : '서버오류'});
    }
}

exports.administerUpdate = async(req, res) => {
    try{
        const { sts, id } = req.body;

        if(sts != 'waiting') {
            const today = new Date();   
            const year = today.getFullYear();
            const month = ('0' + (today.getMonth()+1)).slice(-2);
            const date = ('0' + today.getDate()).slice(-2);
            const hours = ('0' + today.getHours()).slice(-2); 
            const minutes = ('0' + today.getMinutes()).slice(-2);
            const seconds = ('0' + today.getSeconds()).slice(-2); 
            const timeString = year + '.' + month + '.' + date + ' ' + hours + ':' + minutes  + ':' + seconds;
            console.log(timeString);
            const waitingEnd = timeString;
            await Waiting.update({sts, waitingEnd}, {where : {id}});
        } else {
            const waitingEnd = "";
            await Waiting.update({sts, waitingEnd}, {where : {id}});
        }
        
        res.json({result : "대기 상태 update완료"});

    } catch(error) {
        console.log(error);
        res.status(500).json({result : false, message : '서버오류'});
    }
}

exports.waitingSearchAll = async(req, res) => {
    try{
        const result = await Waiting.findAll({
            attributes : ['id', 'clientId', 'sts'],
            include : [{model : Client}]
        });
        //console.log(result);
        res.json(result);
    } catch(error) {
        console.log(error);
        res.status(500).json({result : false, message : '서버오류'});
    }
}

exports.waitingSearchDetail = async(req, res) => {
    try{
        //client에서 waiting id를 보내준다.
        const {id} = req.params;
        const result = await Waiting.findByPk(id, {
            attributes : ['id', 'sts', 'waitingStart', 'waitingEnd'],
            //include : 쿼리를 실행할때 관련된 모델의 데이터도 함께 조회할 수 있도록 하는 옵션
            include : [{model : Client}]
        });
        res.json({result:true, response : result});
    } catch(error) {
        console.log(error);
        res.status(500).json({result : false, message : '서버오류'});
    }
}

exports.clientSearcAll = async(req, res) => {
    try{
        const result = await Client.findAll({
            attributes : ['id', 'userName'],
        });
        res.json(result);
    } catch(error) {
        console.log(error);
        res.status(500).json({result : false, message : '서버오류'});
    }
}

exports.clientSearchOne = async(req, res) => {
    try{
        //client에서 waiting id를 보내준다.
        const {id} = req.params;
        const result = await Client.findByPk(id, {
            attributes : ['id', 'userName', 'email'],
        });
        res.json({result:true, response : result});
    } catch(error) {
        console.log(error);
        res.status(500).json({result : false, message : '서버오류'});
    }
}

