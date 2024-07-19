const { Member, Profile } = require('../models');
const jwt = require('jsonwebtoken');

//회원가입
exports.signup = async (req, res) => {
    try {
        const { userId, password, username, age, email } = req.body;
        //존재여부확인
        const find = await Member.findOne({ where: { userId } });
        console.log('find', find);
        if (find) {
            res.json({ result: false, message: '이미존재하는회원' });
        } else {
            const result = await Member.create({ userId, password });
            console.log('signup', result);
            await Profile.create({ username, age, email, memberId: result.id });
            res.json({ result: true });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ result: false, message: '서버오류' });
    }
};
//로그인
exports.login = async (req, res) => {
    try {
        const { userId, password } = req.body;
        const find = await Member.findOne({ where: { userId } });
        if (find) {
            if (find.password === password) {
                //jwt토큰 발생
                /**
                 * expiresIn: 만료시간
                 * algorithm: 서명 알고리즘 지정
                 * issuer: 토큰발급자 지정
                 */
                const token = jwt.sign({ id: find.id, userId: find.userId }, process.env.SECRET, { expiresIn: '24h' });
                console.log(process.env.SECRET);
                const response = {
                    // id: find.id,
                    // userId: find.userId,
                    token,
                };
                res.json({ result: true, code: 100, response, message: '로그인 성공' });
            } else {
                res.json({ result: false, code: 1000, response: null, message: '비밀번호 틀렸습니다.' });
            }
        } else {
            res.json({ result: false, code: 1001, response: null, message: '회원이 아닙니다.' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ result: false, message: '서버오류' });
    }
};
//회원조회
exports.find = async (req, res) => {
    try {
        const { id } = req.userInfo;
        const result = await Member.findByPk(id, {
            attributes: ['userId', 'password'],
            //include: 쿼리를 실행할때 관련된 모델의 데이터도 함께 조회할 수 있도록하는 옵션
            include: [{ model: Profile, attributes: ['username', 'age', 'email'] }],
        });
        console.log('find', result);
        res.json({ result: true, response: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ result: false, message: '서버오류' });
    }
};
exports.update = async (req, res) => {
    try {
        const { id } = req.userInfo;
        const { password, username, age, email } = req.body;
        const find = await Member.findByPk(id);
        if (find) {
            await Member.update({ password }, { where: { id } });
            await Profile.update({ username, age, email }, { where: { memberId: id } });
            res.json({ result: true });
        } else {
            res.json({ result: false, message: '회원이없습니다.' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ result: false, message: '서버오류' });
    }
};
exports.deleteFunc = async (req, res) => {
    try {
        const { id } = req.userInfo;
        await Profile.destroy({ where: { memberId: id } });
        await Member.destroy({ where: { id } });
        res.json({ result: true });
    } catch (error) {
        console.log(error);
        res.status(500).json({ result: false, message: '서버오류' });
    }
};
