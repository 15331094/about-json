var fs = require('fs');

var json = {
	"firstName": "Zhuming",
	"lastName": "Guo",
	"ID": "15331094"
}


fs.writeFile('data.txt', JSON.stringify(json) + "\r\n", { flag: 'a'}, (err) => {
    if (err) throw err;
    console.log('It\'s saved!');
});


fs.readFile("data.txt", function(err, buffer) {
    if (err) throw err;

    var buf = new Buffer(buffer.toJSON()); // 转换为Buffer对象
	console.log(buf.toString());   // 打印你好

});

