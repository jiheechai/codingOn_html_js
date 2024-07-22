const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const {Post, Image} = require('../models');

//aws설정
aws.config.update({
    accessKeyId: process.env.ACCESSKEY,
    secretAccessKey: process.env.SECRETKEY,
    region : 'ap-northeast-2'
})

//aws s3 인스턴스 생성
const s3 = new aws.S3();

//multer설정. 파일 업로드
const upload = multer({
    storage: multerS3({
        s3,
        bucket: process.env.BUCKET,
        acl : 'public-read', //파일접근권한(public-read로 해야 업로드된 파일이 공개)
        metadata : function(req, file, cb) {
            cb(null, {fieldName: file.fieldname});
        },
        key : function(req, file, cb) {
            cb(null, Date.now().toString() + "-" + file.originalname)
        }
    }),
});

const arrayFiles = upload.array('files');
const uploadFunc = async(req, res) => {
    //db랑 연결하기 위함.
    arrayFiles(req, res, async(err) => {
        if(err) {
            return res.status(500).json({result:false});
        }
        try{
            const {title, content} = req.body;
            const post = await Post.create({title, content});
            // const images = req.files.map(value => ({
            //     url:value.location,
            //     postId : post.id,
            // }));
            const images = [];
            req.files.forEach( (value) => {
                images.push({
                    url: value.location,
                    postId : post.id
                });
            });

            await Image.bulkCreate(images);

            res.json({result : true, response : images});

        } catch (error) {
            console.log(error);
            res.status(500).json({ result: false, message: '서버오류' });
        }
    });
};

const main = (req, res) => {
    res.render('index');
}

module.exports = {uploadFunc, main}